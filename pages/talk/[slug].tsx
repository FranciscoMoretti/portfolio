import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import components from 'components/MDXComponents';
import TalkLayout from 'layouts/talk';
import { allTalks } from '.contentlayer/data';
import type { Talk } from '.contentlayer/types';

export default function Talk({ post }: { post: Talk }) {
  const Component = useMemo(
    () => getMDXComponent(post.body.code),
    [post.body.code]
  );

  return (
    <TalkLayout post={post}>
      <Component
        components={
          {
            ...components
          } as any
        }
      />
    </TalkLayout>
  );
}

export async function getStaticPaths() {
  console.log("allTalksPaths: ", allTalks)
  return {
    paths: allTalks.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  console.log("allTalksProps: ", allTalks)
  const post = allTalks.find((post) => post.slug === params.slug);

  return { props: { post} };
}
