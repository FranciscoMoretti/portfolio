import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import components from 'components/MDXComponents';
import BlogLayout from 'layouts/blog';
import {BlogPostContent, allBlogPostContents} from 'contentlayer/generated';

export default function BlogPage({ post}: { post: BlogPostContent}) {
  const Component = useMemo(
    () => getMDXComponent(post.body.code),
    [post.body.code]
  );

  return (
    <BlogLayout post={post}>
      <Component
        components={
          {
            ...components
          } as any
        }
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogPostContents.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = allBlogPostContents.find((post) => post.slug === params.slug);

  return { props: { post} };
}
