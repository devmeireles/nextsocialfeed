'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

interface ITanstackProviderProps {
  children: React.ReactNode;
}

export const TanstackProvider: React.FC<ITanstackProviderProps> = ({
  children,
}) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
