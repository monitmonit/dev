import React from 'react';
import Main from '../components/korea';
import BaseLayout from '../components/layout/BaseLayout';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const Korea = () => {
  const queryClient = new QueryClient();

  return (
    <BaseLayout>
      <QueryClientProvider client={queryClient}>
        <Main />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BaseLayout>
  );
};

export default Korea;
