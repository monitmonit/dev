import React from 'react';
import Card from './Card';
import { Box, Button, Typography } from '@mui/material';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import type { HistoricalData } from '../../types';

interface HistoryProps {
  data: HistoricalData;
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      position: 'right' as const,
    },
  },
  maintainAspectRatio: false,
};

const History: React.VFC<HistoryProps> = ({ data: rawData }) => {
  const labels = [];
  const data = [];

  if (rawData) {
    let lastValue = 0;
    let index = 0;
    for (const [key, value] of Object.entries(rawData.timeline.cases)) {
      if (index > 0) {
        labels.push(key);
        data.push(value - lastValue);
      }
      lastValue = value;
      index++;
    }
  }

  const chartData = {
    labels,
    datasets: [
      {
        label: '일일 확진자',
        data,
        backgroundColor: '#3178C6',
      },
    ],
  };

  return (
    <Card>
      <Box display="flex" flexDirection="column" gap={3}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6">변화 추이</Typography>
          <Box>
            <Button>년</Button>
            <Button>월</Button>
            <Button>주</Button>
          </Box>
        </Box>
        <Box height="300px">
          <Bar options={options} data={chartData} />
        </Box>
      </Box>
    </Card>
  );
};

export default History;
