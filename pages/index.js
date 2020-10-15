import React from 'react';
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/core';

import Container from '../components/Container';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';

const Index = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
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
            Hi, I'm Francisco Moretti.
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            I'm a software engineer. You’ve found my personal slice of the
            internet – everything you want to know and more is here.
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            My work
          </Heading>
          <ProjectCard
            title="DevSkills"
            description="Pragmatic coding interview for evaluating technical skills."
            href="https://devskills.co/"
            icon="devskills"
          />
        </Flex>
        <Subscribe />
      </Stack>
    </Container>
  );
};

export default Index;
