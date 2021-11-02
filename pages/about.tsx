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
            Hi there! 👋 My name is Francisco Moretti. I'm a software developer, electronic engineer and roboticist.
          </p>
          <p>
          These days I work for {' '} <span className="font-semibold">iRobot</span> developing the next generation
          of products that will live in millions of homes all across the world. My expertise combines electronics,
          automation software, and several components of robot software, including sensors drivers and integrations,
          complex behaviors, path-planning, and mapping algorithms. I enjoy finding creative solutions to problems
          that are challenging and have great impact. My passion for learning, helped me thrive working
          in a wide variety of fields.
          </p>
        </div>
      </div>
    </Container>
  );
}
