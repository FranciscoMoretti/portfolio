import React from 'react';
import {
  Flex,
  Link,
  Heading,
  Text,
  Stack,
  Icon,
  useColorMode
} from '@chakra-ui/core';

const ProjectCard = ({ title, description, href, icon }) => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600'
  };
  const iconColor = {
    light: 'gray.1000',
    dark: 'white'
  };

  return (
    <Link
      mb={4}
      href={href}
      title={title}
      isExternal
      _hover={{
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
        textDecoration: 'none'
      }}
    >
      <Flex
        align="center"
        border="1px solid"
        borderColor={borderColor[colorMode]}
        borderRadius={4}
        p={4}
      >
        <Icon
          aria-label="LinkedIn"
          name={icon}
          color={iconColor[colorMode]}
          size="32px"
          ml={2}
          mr={4}
        />
        <Stack>
          <Heading
            as="h4"
            size="md"
            fontWeight="bold"
            mb={4}
            letterSpacing="tighter"
          >
            {title}
          </Heading>
          <Text lineHeight="1.3">{description}</Text>
        </Stack>
      </Flex>
    </Link>
  );
};

export default ProjectCard;
