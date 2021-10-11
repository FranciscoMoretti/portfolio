import Link from 'next/link';
import { parseISO, format } from 'date-fns';
import type { Newsletter } from '.contentlayer/types';

export default function NewsletterLink({
  slug,
  publishedAt
}: Pick<Newsletter, 'publishedAt' | 'slug'>) {
  return (
    <li>
      <Link href={`/newsletter/${slug}`}>
        <a>{format(parseISO(publishedAt), 'MMMM dd, yyyy')}</a>
      </Link>
    </li>
  );
}
