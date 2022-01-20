import React from 'react';
import Card from './Card';
import { Box, Typography } from '@mui/material';

import type { TotalData } from '../../types';

interface AccumulatedCasesProps {
  data: TotalData;
}

const AccumulatedCases: React.VFC<AccumulatedCasesProps> = ({
  data: { cases, deaths, recovered },
}) => {
  return (
    <Card>
      <Box display="flex" flexDirection="column" gap={1}>
        <Typography variant="h6">누적 현황</Typography>
        <Box display="flex" flexDirection="column" gap={1}>
          <Typography>확진: {cases}</Typography>
          <Typography>사망: {deaths}</Typography>
          <Typography>완치: {recovered}</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default AccumulatedCases;
