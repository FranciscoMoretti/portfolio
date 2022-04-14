import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import components from 'components/MDXComponents';
import TalkLayout from 'layouts/talk';
import {TalkContent, allTalkContents } from 'contentlayer/generated';

export default function TalkPage({ post }: { post: TalkContent }) {
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
  return {
    paths: allTalkContents.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = allTalkContents.find((post) => post.slug === params.slug);

  return { props: { post} };
}
