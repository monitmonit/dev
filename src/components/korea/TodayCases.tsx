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

const TodayCases: React.VFC<Data> = ({
  data: { todayCases, critical, todayDeaths, todayRecovered },
}) => {
  return (
    <Card>
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="h6">일일 현황</Typography>
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography>확진: {todayCases}</Typography>
          <Typography>위중증: {critical}</Typography>
          <Typography>사망: {todayDeaths}</Typography>
          <Typography>회복: {todayRecovered}</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default TodayCases;
