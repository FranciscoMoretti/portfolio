import React from 'react';
import { Flex, Link, IconButton, Stack, Text, Button } from '@chakra-ui/core';

const Footer = () => (
  <Stack>
    <Flex justify="center" mb={4}>
      <Link
        href="https://github.com/FranciscoMoretti"
        title="GitHub"
        isExternal
      >
        <IconButton
          aria-label="GitHub"
          icon="github"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/francisco-moretti/"
        title="LinkedIn"
        isExternal
      >
        <IconButton
          aria-label="LinkedIn"
          icon="linkedin"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="mailto:franciscoemoretti@gmail.com" title="Email" isExternal>
        <IconButton
          aria-label="Email"
          icon="mail"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
    </Flex>
    <Flex justify="center" mb={4}>
      <Link
        href="https://github.com/leerob/leerob.io"
        title="leerob"
        isExternal
        color={'gray.500'}
      >
        The backbone of this site is a fork of leerob.io built by @leeerob.
      </Link>
    </Flex>
  </Stack>
);

export default Footer;
