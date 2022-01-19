import React from 'react';
import AccumulatedCases from './AccumulatedCases';
import History from './History';
import TodayCases from './TodayCases';
import Box from '@mui/material/Box';

import { useQuery } from 'react-query';
import fetchTotalDataByCountry from '../../api/fetchTotalDataByCountry';

const Main: React.VFC = () => {
  const { data, isSuccess, isLoading, isError } = useQuery('korea', () =>
    fetchTotalDataByCountry({ country: 'KR' }),
  );

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error!</div>;

  if (isSuccess) {
    return (
      <Box position="relative" display="flex" flexDirection="column" gap={2}>
        <Box display="flex" gap={2}>
          <TodayCases data={data} />
          <AccumulatedCases data={data} />
        </Box>
        <Box>
          <History />
        </Box>
      </Box>
    );
  }
};

export default Main;
