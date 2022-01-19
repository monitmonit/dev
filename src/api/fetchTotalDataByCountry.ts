import axios from 'axios';

interface Queries {
  country: string | number;
  yesterday?: boolean;
  twoDaysAgo?: boolean;
  strict?: boolean;
  allowNull?: boolean;
}

interface Data {
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
}

const baseURL = 'https://disease.sh/v3/covid-19/countries';

const fetchDataByCountry = async ({
  country,
  yesterday = true,
  twoDaysAgo = false,
  strict = true,
  allowNull = false,
}: Queries): Promise<Data> => {
  const response = await axios.get(
    `${baseURL}/${country}?yesterdat=${yesterday}&twoDaysAgo=${twoDaysAgo}&strict=${strict}&allowNull=${allowNull}`,
  );

  return response.data as Data;
};

export default fetchDataByCountry;
