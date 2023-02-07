import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

interface Props {
  children: React.ReactNode;
}

const client = new QueryClient();

export const Wrapper = ({ children }: Props) => (
  <QueryClientProvider client={client}>{children}</QueryClientProvider>
);
