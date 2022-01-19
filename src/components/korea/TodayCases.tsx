import React from 'react';
import Card from './Card';
import { Box, Typography } from '@mui/material';

import type { TotalData } from '../../types';

interface TodayCasesProps {
  data: TotalData;
}

const TodayCases: React.VFC<TodayCasesProps> = ({
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
