import React from 'react';
import Main from '../components/korea';
import BaseLayout from '../components/layout/BaseLayout';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import axios from 'axios';
axios.defaults.baseURL = 'https://disease.sh/v3/covid-19';

const Korea = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BaseLayout>
        <Main />
      </BaseLayout>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Korea;
