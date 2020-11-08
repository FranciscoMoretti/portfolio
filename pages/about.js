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

const url = 'https://franciscomoretti.vercel.app/about';
const title = 'About Me – Francisco Moretti';

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
              Hi there! 👋 My name is Francisco Moretti. I'm a software
              developer, electronic engineer and roboticist.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              These days I work on{' '}
              <Link href="https://irobot.com" color="blue.500">
                <b>iRobot</b>
              </Link>{' '}
              building cool products at one of the largest consumer robots
              companies in the world.
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
