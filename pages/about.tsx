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
          I'm a software engineer who loves learning and lifting others while I climb. Nowadays, I automate simulations 
          of domestic cleaning robots using Python to make sure they are helpful for people in their homes.
          </p>
          <p>
          I share my journey into the world of web development and the insights I got along the way. At the moment, 
          I'm sailing with React, Next.js, and Tailwind CSS.
          </p>
          <p>
          I love creating and using tools that help programmers achieve their best work without effort. 
          I'm a big fan of development environments and automating tasks.
          </p>
          <p>
          I'm interested in clean code and great programming practices. I advocate kindness to the next reader of the code.
          </p>
          <p>
          Mastering learning is the ultimate superpower, that's why I'm passionate about studying techniques and how the brain works.
          </p>
        </div>
      </div>
    </Container>
  );
}
