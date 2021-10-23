import Container from 'components/Container';
import YoutubePlaylistFull from 'components/YoutubePlaylistFull';
import { InferGetStaticPropsType } from 'next';
import { pick } from 'lib/utils';
import { allTalks } from '.contentlayer/data';

export default function SoftwareTalks({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <Container
      title="Software Talks – Francisco Moretti"
      description="List of the my favourite conference sessions."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Software Talks
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is the list of my favourites software talks.
          </p>
        </div>
        <div className="flex flex-col w-full">
          <YoutubePlaylistFull posts={posts} />
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://youtube.com/playlist?list=PLeEX4sJL6yWxWPuKUS9gEl5RAqkX6e-kS"
          className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
        >
          Watch all videos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 ml-1"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
            />
          </svg>
        </a>
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const posts = allTalks.map((post) =>
    pick(post, ['slug', 'title', 'publishedAt'])
  );

  return { props: { posts } };
}
