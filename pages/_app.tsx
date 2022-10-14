import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import '@tremor/react/dist/esm/tremor.css';
import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'light'
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}

export default MyApp;
