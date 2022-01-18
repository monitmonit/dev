import Card from './Card';
import useFetchDataByCountry from '../../hooks/useFetchDataByCountry';

const Main: React.VFC = () => {
  useFetchDataByCountry({ country: 'KR' });
  return (
    <Card width="200px" height="200px">
      Hello Korea
    </Card>
  );
};

export default Main;
