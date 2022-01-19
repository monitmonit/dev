import React from 'react';
import Card from './Card';
import { Box, Typography } from '@mui/material';

interface Data {
  data: {
    updated: number;
    country: string;
    countryInfo: {
      _id: number;
      iso2: string;
      iso3: string;
      lat: number;
      long: number;
      flag: string;
    };
    cases: number;
    todayCases: number;
    deaths: number;
    todayDeaths: number;
    recovered: number;
    todayRecovered: number;
    active: number;
    critical: number;
    casesPerOneMillion: number;
    deathsPerOneMillion: number;
    tests: number;
    testsPerOneMillion: number;
    population: number;
    continent: number;
    oneCasePerPeople: number;
    oneDeathPerPeople: number;
    oneTestPerPeople: number;
    activePerOneMillion: number;
    recoveredPerOneMillion: number;
    criticalPerOneMillion: number;
  };
}

const AccumulatedCases: React.VFC<Data> = ({ data: { cases, deaths, recovered } }) => {
  return (
    <Card>
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="h6">누적 현황</Typography>
        <Box display="flex" flexDirection="column" gap={1} paddingX={1}>
          <Typography>확진: {cases}</Typography>
          <Typography>사망: {deaths}</Typography>
          <Typography>완치: {recovered}</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default AccumulatedCases;
