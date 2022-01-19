import axios from 'axios';

interface Queries {
  country: string | number;
  lastDays?: string | number;
}

interface Data {
  country: string;
  province: string[];
  timeline: {
    cases: {
      [key: string]: number;
    };
    deaths: {
      [key: string]: number;
    };
    recovered: {
      [key: string]: number;
    };
  };
}

const baseURL = 'https://disease.sh/v3/covid-19/historical';

const fetchSeriesDataByCountry = async ({ country, lastDays = 'all' }: Queries): Promise<Data> => {
  const response = await axios.get(`${baseURL}/${country}`);
  console.log(response.data);
  return response.data as Data;
};

export default fetchSeriesDataByCountry;
