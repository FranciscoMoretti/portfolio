import Link from 'next/link';
import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { Views } from 'lib/types';
import type { Blog } from '.contentlayer/generated';

export default function BlogPost({
  title,
  summary,
  slug
}: Pick<Blog, 'title' | 'summary' | 'slug'>) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, fetcher);
  const views = data?.total;

  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-2 text-lg font-medium text-gray-dark md:text-xl dark:text-gray-light">
              {title}
            </h4>
            <p className="w-32 mb-4 text-left  text-gray-dark-medium dark:text-gray-light-medium md:text-right md:mb-0">
              {`${views ? new Number(views).toLocaleString() : '–––'} views`}
            </p>
          </div>
          <p className="text-gray-dark-medium dark:text-gray-light-medium">{summary}</p>
        </div>
      </a>
    </Link>
  );
}
