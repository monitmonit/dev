import { useQuery } from 'react-query';
import fetchTotalDataByCountry from '../../api/fetchTotalDataByCountry';

import Card from './Card';
import { Box, Typography } from '@mui/material';

const Main: React.VFC = () => {
  const { data, isLoading, isError } = useQuery('korea', () =>
    fetchTotalDataByCountry({ country: 'KR' }),
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;
  if (data) {
    const { critical, todayCases, todayDeaths, todayRecovered, cases, deaths, recovered } = data;
    return (
      <Box position="relative" display="flex" flexDirection="column" gap={2}>
        <Box display="flex" justifyContent="space-between" gap={2}>
          <Card width="342px" height="160px">
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography variant="h6">일일 현황</Typography>
              <Typography>확진: {todayCases}</Typography>
              <Typography>위중증: {critical}</Typography>
              <Typography>사망: {todayDeaths}</Typography>
              <Typography>회복: {todayRecovered}</Typography>
            </Box>
          </Card>
          <Card width="342px" height="160px">
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography variant="h6">누적 현황</Typography>
              <Typography>확진: {cases}</Typography>
              <Typography>사망: {deaths}</Typography>
              <Typography>회복: {recovered}</Typography>
            </Box>
          </Card>
          <Card width="342px" height="160px">
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography variant="h6">백신 접종 현황</Typography>
              <Typography>확진: {cases}</Typography>
              <Typography>사망: {deaths}</Typography>
              <Typography>회복: {recovered}</Typography>
            </Box>
          </Card>
        </Box>
        <Box>
          <Card height="348px">
            <Typography variant="h6">누적 그래프</Typography>
          </Card>
        </Box>
      </Box>
    );
  }
};

export default Main;
