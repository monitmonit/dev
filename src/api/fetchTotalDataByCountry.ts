import axios from 'axios';

interface Queries {
  country: string | number;
  yesterday?: boolean;
  twoDaysAgo?: boolean;
  strict?: boolean;
  allowNull?: boolean;
}

const baseURL = 'https://disease.sh/v3/covid-19/countries';

const useFetchDataByCountry = async ({
  country,
  yesterday = true,
  twoDaysAgo = false,
  strict = true,
  allowNull = false,
}: Queries) => {
  const response = await axios.get(
    `${baseURL}/${country}?yesterdat=${yesterday}&twoDaysAgo=${twoDaysAgo}&strict=${strict}&allowNull=${allowNull}`,
  );

  return response.data;
};

export default useFetchDataByCountry;
