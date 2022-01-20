import React, { useState } from 'react';
import TitleCard from './TitleCard';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { useQuery } from 'react-query';
import fetchHistoryDataByCountry from '../../api/fetchHistoryDataByCountry';

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
      position: 'bottom' as const,
    },
  },
  maintainAspectRatio: false,
};

const History: React.VFC = () => {
  const [lastDays, setLastDays] = useState(30);

  const { data: rawData } = useQuery(['history', lastDays], () =>
    fetchHistoryDataByCountry({ country: 'KR', lastDays }),
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
        label: '일일 확진자',
        data,
        backgroundColor: '#3178C6',
      },
    ],
  };

  return (
    <TitleCard title="변화추이" height="90%">
      <Box position="absolute" top="8px" right="8px">
        <Button onClick={() => setLastDays(366)}>년</Button>
        <Button onClick={() => setLastDays(31)}>월</Button>
        <Button onClick={() => setLastDays(8)}>주</Button>
      </Box>
      <Bar options={options} data={chartData} />
    </TitleCard>
  );
};

export default History;
