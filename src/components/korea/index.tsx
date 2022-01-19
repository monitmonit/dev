import React from 'react';
import AccumulatedCases from './AccumulatedCases';
import History from './History';
import TodayCases from './TodayCases';
import Box from '@mui/material/Box';

import axios from 'axios';
import { useQueries } from 'react-query';

import fetchTotalDataByCountry from '../../api/fetchTotalDataByCountry';
import fetchHistoryDataByCountry from '../../api/fetchHistoryDataByCountry';

axios.defaults.baseURL = 'https://disease.sh/v3/covid-19';

const Main: React.VFC = () => {
  const queryResults = useQueries([
    { queryKey: 'total', queryFn: () => fetchTotalDataByCountry({ country: 'KR' }) },
    {
      queryKey: 'history',
      queryFn: () => fetchHistoryDataByCountry({ country: 'KR', lastDays: 30 }),
    },
  ]);

  const isLoading = queryResults.some((query) => query.isLoading);
  const isError = queryResults.some((query) => query.isError);
  const isSuccess = queryResults.every((query) => query.isSuccess);

  const [total, history] = queryResults;

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error!</div>;

  if (isSuccess) {
    return (
      <Box position="relative" display="flex" flexDirection="column" gap={2}>
        <Box display="flex" gap={2}>
          <TodayCases data={total.data} />
          <AccumulatedCases data={total.data} />
        </Box>
        <Box>
          <History data={history.data} />
        </Box>
      </Box>
    );
  }
};

export default Main;
