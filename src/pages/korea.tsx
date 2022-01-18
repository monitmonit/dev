import Main from '../components/korea';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import BaseLayout from '../components/layout/BaseLayout';

const Korea = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      },
    },
  });

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
