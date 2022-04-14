import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import Container from 'components/Container';
import ViewCounter from 'components/ViewCounter';
import type { PropsWithChildren } from 'react';
import type { BlogPostContent } from 'contentlayer/generated';

const editUrl = (slug) =>
  `https://github.com/FranciscoMoretti/portfolio/edit/master/data/blog/${slug}.mdx`;

export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: BlogPostContent }>) {
  return (
    <Container
      title={`${post.title} – Francisco Moretti`}
      description={post.summary}
      image={`https://franciscomoretti.vercel.app${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Francisco Moretti"
              height={24}
              width={24}
              src="/avatar.jpg"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-dark dark:text-gray-light">
              {'Francisco Moretti / '}
              {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-dark-medium dark:text-gray-light-medium min-w-32 md:mt-0">
            {post.readingTime.text}
            {` • `}
            <ViewCounter slug={post.slug} />
          </p>
        </div>
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
        <span className="h-16" />
        <div className="text-sm text-gray-dark dark:text-gray-light">
          <a
            href={editUrl(post.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Edit on GitHub'}
          </a>
        </div>
      </article>
    </Container>
  );
}
