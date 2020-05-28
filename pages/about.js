import React from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Link,
  Icon
} from '@chakra-ui/core';

import Container from '../components/Container';

const url = 'https://leerob.io/about';
const title = 'About Me – Anton Fenske';

const About = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };
  const linkColor = {
    light: 'hsl(208, 99%, 44%)',
    dark: 'hsl(208, 95%, 68%)'
  };

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
        }}
      />
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              About Me
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              Hey, I’m Lee. I live in Des Moines, IA and I’m a Senior Software
              Engineer at&nbsp;
              <Link
                href="https://innovate.hy-vee.com"
                title="Hy-Vee"
                isExternal
                color={linkColor[colorMode]}
              >
                Hy-Vee
              </Link>
              , a $10B grocery tech company in the Midwest. As a tech lead, my
              primary focus is developing Aisles Online, Hy-Vee’s e-commerce
              grocery shopping platform – which serves millions of customers
              every year. I also help maintain our internal component library.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              At the beginning of 2020, I launched my most ambitious project – a
              50+ lesson video course on React and Next.js. It’s called&nbsp;
              <Link
                href="https://masteringnextjs.com"
                title="Mastering Next.js"
                isExternal
                color={linkColor[colorMode]}
              >
                Mastering Next.js
              </Link>
              , and it’s been my most successful solo-endeavor so far.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              I’ve spoken across the country at conferences and meet-ups about
              front-end development, design, and recruiting. I also actively
              contribute to my blog, which attracts thousands of readers every
              month. I mostly write about development, tech careers, and my
              personal life. If you'd like to follow along, subscribe to&nbsp;
              <Link
                href="/newsletter"
                title="Newsletter"
                color={linkColor[colorMode]}
              >
                my newsletter.
              </Link>
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              I grew up in small-town Iowa and went to school at Iowa State,
              graduating with a degree in Computer Engineering. I spend my free
              time playing music, creating videos, and enjoying time with
              friends and family
            </Text>
            <Heading letterSpacing="tight" mt={8} mb={4} as="h2" size="xl">
              Conference Talks
            </Heading>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              <Link
                display="flex"
                href="/building-component-libraries-with-a-monorepo.pdf"
                isExternal
              >
                <Flex align="center">
                  Building Component Libraries with a Monorepo
                  <Icon name="external-link" mx={2} size="16px" />
                </Flex>
              </Link>
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={8}>
              Learn why your organization needs a component library and discover
              the best practices for building, scaling, and adopting it across
              all platforms. We'll be using industry-standard technology (React,
              JavaScript, Storybook) alongside cutting-edge solutions
              (CSS-in-JS, Monorepo).
            </Text>
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              <Link
                display="flex"
                href="/recruiting-engineers-talent42-lee-robinson.pdf"
                isExternal
              >
                <Flex align="center">
                  Recruiting Engineers (From An Engineer's Perspective)
                  <Icon name="external-link" mx={2} size="16px" />
                </Flex>
              </Link>
            </Heading>
            <Text color={secondaryTextColor[colorMode]} mb={8}>
              Hiring talent is becoming increasingly difficult with low
              unemployment rates and the tech industry booming. What you can do
              to stick out? Learn from an engineer who's been involved on both
              sides - both as a candidate and with hiring - on what candidates
              really want out of a position.
            </Text>
            <iframe
              height="280"
              src="https://www.google.com/maps/d/embed?mid=1QOGi-u8d4vwoQ4vC4zQjKxrSfsDIQdOK&hl=en"
              title="Lee's Travel Map"
              width="100%"
            />
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
