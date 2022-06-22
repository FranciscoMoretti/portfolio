import Link from 'next/link';

import Container from 'components/Container';

export default function About() {
  return (
    <Container title="About – Francisco Moretti">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-dark-medium dark:text-gray-light-medium">
          <p>
            Hi there! 👋 My name is Francisco Moretti.
          </p>
          <p>
          I use Python to test robots to make sure that customers get high-quality goods.
          </p>
          <p>
          I share my journey in the world of web development and the insights I get along the way. 
          At the moment, I'm working with React, Next.js, and Tailwind CSS.
          </p>
          <p>
          I like creating and using tools that make it easier for my teammates to produce their best work.
          I'm a big fan of improving development environments and automating tasks.
          </p>
          <p>
          I'm interested in clean code and great programming practices. I advocate kindness to the next reader of the code.
          </p>
          <p>
          The ultimate superpower is learning. That's why I'm passionate about learning strategies and how the brain functions.
          </p>
        </div>
      </div>
    </Container>
  );
}
