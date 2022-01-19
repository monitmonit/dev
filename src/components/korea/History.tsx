import React from 'react';
import Card from './Card';
import { Box, Typography } from '@mui/material';

import { useQuery } from 'react-query';
import fetchSeriesDataByCountry from '../../api/fetchSeriesDatabyCountry';

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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  plugins: {
    legend: {
      position: 'right' as const,
    },
  },
  outerHeight: '100px',
  maintainAspectRatio: false,
};

const History: React.VFC = () => {
  const { data: rawData } = useQuery('history', () =>
    fetchSeriesDataByCountry({ country: 'KR', lastDays: 30 }),
  );

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
        label: '누적 확진자',
        data,
        backgroundColor: '#3178C6',
      },
    ],
  };

  return (
    <Box>
      <Card height="348px">
        <Typography variant="h6">변화 추이</Typography>
        <Bar options={options} data={chartData} />
      </Card>
    </Box>
  );
};

export default History;
