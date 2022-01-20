import React from 'react';
import AccumulatedCases from './AccumulatedCases';
import History from './History';
import TodayCases from './TodayCases';
import Vaccine from './Vaccine';
import Box from '@mui/material/Box';

import { useQueries } from 'react-query';
import fetchTotalDataByCountry from '../../api/fetchTotalDataByCountry';
import fetchVaccineData from '../../api/fetchVaccineData';

const Main: React.VFC = () => {
  const queryResults = useQueries([
    { queryKey: 'total', queryFn: () => fetchTotalDataByCountry({ country: 'KR' }) },
    {
      queryKey: 'vaccine',
      queryFn: fetchVaccineData,
    },
  ]);

  const isLoading = queryResults.some((query) => query.isLoading);
  const isError = queryResults.some((query) => query.isError);
  const isSuccess = queryResults.every((query) => query.isSuccess);

  const [total, vaccine] = queryResults;

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error!</div>;

  if (isSuccess) {
    return (
      <Box position="relative" display="flex" flexDirection="column" gap={2} height="100%">
        <Box display="flex" gap={2} flexGrow="1">
          <TodayCases data={total.data} />
          <AccumulatedCases data={total.data} />
          <Vaccine data={vaccine.data} />
        </Box>
        <Box flexGrow="6">
          <History />
        </Box>
      </Box>
    );
  }
};

export default Main;
