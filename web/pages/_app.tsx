import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import React, { useState } from 'react';
import { RouteGuard } from '../src/components/templates';

const App = ({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <div>
          <Head>
            <title>Contic starter project</title>
            <meta name="description" content="Cloned from contic starter" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <RouteGuard>
            <Component {...pageProps} />
          </RouteGuard>
        </div>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default App;
