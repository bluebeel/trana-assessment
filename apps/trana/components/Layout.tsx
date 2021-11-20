import * as React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { ScrollArea } from './ScrollArea';
import { Flex, Box, Container, styled, Sidebar } from '@trana/ui';
import { COURSES } from '../lib/data';

const Button = styled('button', {
    // Reset
    all: 'unset',
    alignItems: 'center',
    boxSizing: 'border-box',
    userSelect: 'none',
    '&::before': {
      boxSizing: 'border-box',
    },
    '&::after': {
      boxSizing: 'border-box',
    },
  
    // Custom reset?
    display: 'inline-flex',
    flexShrink: 0,
    justifyContent: 'center',
    lineHeight: '$sizes$5',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  
    // Custom
    height: '$5',
    px: '$2',
    fontFamily: '$sans',
    fontSize: '$1',
    fontWeight: 500,
    fontVariantNumeric: 'tabular-nums',
  
    '&:disabled': {
      backgroundColor: '$slate2',
      boxShadow: 'inset 0 0 0 1px $colors$slate7',
      color: '$slate8',
      pointerEvents: 'none',
    },

    borderRadius: '$1',
  
    variants: {
      variant: {
        gray: {
          backgroundColor: '$loContrast',
          boxShadow: 'inset 0 0 0 1px $colors$slate7',
          color: '$hiContrast',
          '@hover': {
            '&:hover': {
              boxShadow: 'inset 0 0 0 1px $colors$slate8',
            },
          },
          '&:active': {
            backgroundColor: '$slate2',
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
          '&:focus': {
            boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
          },
          '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
            backgroundColor: '$slate4',
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
        },
      },
      state: {
        active: {
          backgroundColor: '$slate4',
          boxShadow: 'inset 0 0 0 1px $colors$slate8',
          color: '$slate11',
          '@hover': {
            '&:hover': {
              backgroundColor: '$slate5',
              boxShadow: 'inset 0 0 0 1px $colors$slate8',
            },
          },
          '&:active': {
            backgroundColor: '$slate5',
          },
          '&:focus': {
            boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
          },
        },
      },
      ghost: {
        true: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        },
      },
    },
    compoundVariants: [
      {
        variant: 'gray',
        ghost: 'true',
        css: {
          backgroundColor: 'transparent',
          color: '$hiContrast',
          '@hover': {
            '&:hover': {
              backgroundColor: '$slateA3',
              boxShadow: 'none',
            },
          },
          '&:active': {
            backgroundColor: '$slateA4',
          },
          '&:focus': {
            boxShadow: 'inset 0 0 0 1px $colors$slateA8, 0 0 0 1px $colors$slateA8',
          },
          '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
            backgroundColor: '$slateA4',
            boxShadow: 'none',
          },
        },
      },
    ],
    defaultVariants: {
      variant: 'gray',
    },
  });

export function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);


  React.useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events.on('routeChangeStart', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, []);

  return (
    <Flex
      css={{
        flexDirection: 'column',
        '@bp2': { flexDirection: 'row' },
      }}
    >
      <Box
        css={{
          width: '100%',
          maxHeight: 'auto',
          borderBottom: '1px solid',
          borderColor: '$slate6',
          WebkitOverflowScrolling: 'touch',
          overflowX: 'hidden',
          left: 0,
          top: '$sizes$8',
          position: 'fixed',
          backgroundColor: '$loContrast',
          zIndex: 1,
          ...(isOpen ? { bottom: 0 } : {}),

          '@bp2': {
            bottom: 0,
            width: 'fit-content',
            borderRight: '1px solid',
            borderBottom: '0',
            borderColor: '$slate6',
          },
        }}
      >
        <ScrollArea>
          <Flex css={{ alignItems: 'center', py: '$2', px: '$4', '@bp2': { display: 'none' } }}>
            <Box css={{ ml: '-$1' }}>
              <Button
                ghost
                onClick={() => setIsOpen(!isOpen)}
                state={isOpen ? 'active' : undefined}
              >
                <HamburgerMenuIcon />
                <Box css={{ ml: '$2' }}>Menu</Box>
              </Button>
            </Box>
          </Flex>

          <Box
            css={{
              display: isOpen ? 'block' : 'none',
              '@bp2': { display: 'block', padding: '20px' },
            }}
          >
            <Box css={{ width: '100%', padding: '20px', '@bp2': { width: '279px', padding: "0px" }, }}><Sidebar menus={[{title: "Welcome", slug: "/", type: null}]} courses={COURSES}/></Box>
            <Box css={{ height: '$5', '@bp2': { height: '$8' } }} />
          </Box>
        </ScrollArea>
      </Box>

      <Box
        css={{
          maxWidth: '100%',
          flex: 1,
          pt: '$8',
          pb: '$5',

          '@bp2': { pb: '$9', pl: '320px' },
          '@media (min-width: 1440px)': { pr: '250px' },
        }}
      >
        <Container size="3" css={{ maxWidth: '780px', position: 'relative' }}>
          {children}
        </Container>
      </Box>
    </Flex>
  );
}