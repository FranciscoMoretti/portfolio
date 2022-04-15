import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import YoutubePlaylistCompact from '../components/YoutubePlaylistCompact';

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1">
              Francisco Moretti
            </h1>
            <h2 className="mb-4">
              Sr. Software Automation Engineer at{' '}
              <span className="font-semibold">iRobot</span>
            </h2>
            <p className="mb-16">
              I'm a Software Developer, Electronic Engineer and Roboticist. You’ve found my personal slice
              of the internet – everything you want to know and more is here.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Francisco Moretti"
              height={176}
              width={176}
              src="/avatar.jpg"
              placeholder='blur'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Posts
        </h3>
        <div className="w-full flex gap-6 flex-col md:flex-row">
          <BlogPostCard
            title="Voliner - Flywheel energy storage system"
            slug="voliner"
            gradient="from-[#12c2e9] via-[#c471ed] to-[#f7797d]" 
            // https://uigradients.com/#JShine
            />
          <BlogPostCard
            title="Next.js in a VS Code development container"
            slug="next-js-devcontainer"
            gradient="from-[#8360c3] to-[#2ebf91]"
            // https://uigradients.com/#KyeMeh
            />
          <BlogPostCard
            title="My VS Code Competitive Programming setups"
            slug="vscode-competitive-programming"
            gradient="from-[#40E0D0] via-[#FF8C00] to-[#f7797d]"
            // https://uigradients.com/#WeddingDayBlues
          />
        </div>
        <Link href="/blog">
          <a className="flex mt-8 text-gray-dark-medium dark:text-gray-light-medium leading-7 rounded-lg
              hover:text-gray-dark dark:hover:text-gray-light transition-all h-6">
            Read all posts
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
        </Link>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Latest Software Talks
        </h3>
        <p className="mb-4">
          These are the latests videos I've added to the curated list of my favourites tech talks. 
        </p>
        <YoutubePlaylistCompact maxItems = "4" />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://youtube.com/playlist?list=PLeEX4sJL6yWxWPuKUS9gEl5RAqkX6e-kS"
          className="flex mt-8 text-gray-dark-medium dark:text-gray-light-medium leading-7 rounded-lg
              hover:text-gray-dark dark:hover:text-gray-light transition-all h-6"
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
