import { Box, globalCss } from '@trana/ui';
import { AppProps } from 'next/app';
import React from 'react';
import { IdProvider } from '@radix-ui/react-id';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';

const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  body: {
    margin: 0,
    color: 'black',
    backgroundColor: '#f5f5fd',
    fontFamily: '$sans',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',
  },

  svg: {
    display: 'block',
    verticalAlign: 'middle',
  },

  '#__next': {
    position: 'relative',
    zIndex: 0,
  },
});

function CustomApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <IdProvider>
      <Box
        css={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 2,
        }}
      >
        <Header />
      </Box>
      <Box css={{ pt: '$8', position: 'relative', zIndex: 1 }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Box>
    </IdProvider>
  );
}

export default CustomApp;
