import React from 'react';
import IframeResizer from 'iframe-resizer-react';
import { parseISO, format } from 'date-fns';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  Link,
  Box
} from '@chakra-ui/core';

import Container from '../components/Container';
import ViewCounter from '../components/ViewCounter';
import BlogSeo from '../components/BlogSeo';

const editUrl = (slug) =>
  `https://github.com/FranciscoMoretti/portfolio/edit/master/pages/blog/${slug}.mdx`;

export default (frontMatter) => {
  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');

  return ({ children }) => {
    const { colorMode } = useColorMode();
    const textColor = {
      light: 'gray.700',
      dark: 'gray.400'
    };

    return (
      <Container>
        <BlogSeo
          url={`https://franciscomoretti.vercel.app/blog/${slug}`}
          {...frontMatter}
        />
        <Stack
          as="article"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          w="100%"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            w="100%"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              {frontMatter.title}
            </Heading>
            <Flex
              justify="space-between"
              align={['initial', 'center']}
              direction={['column', 'row']}
              mt={2}
              w="100%"
              mb={4}
            >
              <Flex align="center">
                <Avatar
                  size="xs"
                  name="Francisco Moretti"
                  src="https://en.gravatar.com/userimage/187050769/7e746ca78f2df4f9070becd06a040efb.jpeg"
                  mr={2}
                />
                <Text fontSize="sm" color={textColor[colorMode]}>
                  {frontMatter.by}
                  {'Francisco Moretti / '}
                  {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
                </Text>
              </Flex>
              <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
                {frontMatter.readingTime.text}
              </Text>
              <ViewCounter id={slug} />
            </Flex>
          </Flex>
          {children}
          <Box mt={12}>
            <Link href={editUrl(slug)} isExternal>
              {'Edit on GitHub'}
            </Link>
          </Box>
          <IframeResizer
            mt={10}
            checkOrigin={false}
            title="Comments"
            src={`https://fastfeedback.io/embed/R304ocjeB8gUf6BGwfkC/${slug}?theme=${colorMode}`}
            style={{
              width: '1px',
              minWidth: '100%'
            }}
          />
        </Stack>
      </Container>
    );
  };
};
