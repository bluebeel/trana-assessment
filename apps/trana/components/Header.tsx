import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, Container, Flex } from '@trana/ui';
import { TranaLogo } from './TranaLogo';
import { BoxLink } from './BoxLink';

export const Header = () => {
  return (
    <Box
      as="header"
      css={{
        backgroundColor: '#f5f5fd',
        borderBottom: '1px solid',
        borderColor: '$slate6',
      }}
    >
      <Container size="4">
        <Flex align="center" justify="between" css={{ height: '$8' }}>
          <NextLink href={'/'} passHref>
            <BoxLink>
              <TranaLogo label={'Trana homepage'} />
            </BoxLink>
          </NextLink>
        </Flex>
      </Container>
    </Box>
  );
};
