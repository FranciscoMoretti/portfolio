import Link from 'next/link';


const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-dark-medium dark:text-gray-light-medium
                                       hover:text-gray-dark dark:hover:text-gray-light transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
  {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-dark-medium dark:text-gray-light-medium
                hover:text-gray-dark dark:hover:text-gray-light transition">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-dark-medium dark:text-gray-light-medium
                hover:text-gray-dark dark:hover:text-gray-light transition">
              About
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-dark-medium dark:text-gray-light-medium
                hover:text-gray-dark dark:hover:text-gray-light transition">
              Blog
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/FranciscoMoretti">GitHub</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/francisco-moretti">
            LinkedIn
          </ExternalLink>
          <ExternalLink href="https://twitter.com/franmoretti_">
            Twitter
          </ExternalLink>
          
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/uses">
            <a className="text-gray-dark-medium dark:text-gray-light-medium
                hover:text-gray-dark dark:hover:text-gray-light transition">Uses</a>
          </Link>
          <Link href="/talks">
            <a className="text-gray-dark-medium dark:text-gray-light-medium
                hover:text-gray-dark dark:hover:text-gray-light transition">Software Talks</a>
          </Link>
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-around space-y-4">
        <p className="text-gray-dark-medium dark:text-gray-light-medium flex flex-row flex-wrap
            justify-center">
          The backbone of this site is a fork of&nbsp;
        </p>
        <ExternalLink href="https://github.com/leerob/leerob.io">
          <div className="hover:text-gray-dark dark:hover:text-gray-light transition">
            leerob.io
          </div>  
        </ExternalLink>
        <p className="text-gray-dark-medium dark:text-gray-light-medium flex flex-row flex-wrap
          justify-center">
        &nbsp;built by @leeerob.
        </p>
      </div>
    </footer>
  );
}
