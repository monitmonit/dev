import Link from 'next/link';
import { Typography } from '@mui/material';

interface HeaderItemProps {
  country: string;
}

const HeaderItem: React.VFC<HeaderItemProps> = ({ country }) => {
  return (
    <Link href={`/${country}`}>
      <Typography align="center" variant="h5" sx={{ color: '#fff' }}>
        {country}
      </Typography>
    </Link>
  );
};

export default HeaderItem;
