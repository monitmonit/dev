import React, { ReactElement, useEffect, useState } from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import axios from 'axios';

const Mongolia: React.VFC = () => {
  const baseUrl = 'https://disease.sh/v3/covid-19/countries/MN';
  // const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <BaseLayout>
      <div>Mongolia Covid-19</div>
    </BaseLayout>
  );
};

export default Mongolia;
