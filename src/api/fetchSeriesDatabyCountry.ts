import axios from 'axios';
import type { HistoricalData } from '../types';

interface Queries {
  country: string | number;
  lastDays?: string | number;
}

const fetchSeriesDataByCountry = async ({
  country,
  lastDays = 'all',
}: Queries): Promise<HistoricalData> => {
  const response = await axios.get(`historical/${country}?lastDays=${lastDays}`);
  console.log(response.data);
  return response.data as HistoricalData;
};

export default fetchSeriesDataByCountry;
