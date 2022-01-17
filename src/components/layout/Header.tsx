import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import MenuItem from './MenuItem';
import HomeMenu from './HomeMenu';

const countries = ['Korea', 'Japan', 'China', 'Mongolia', 'Taiwan'];

const Header: React.VFC = () => {
  const mapcountries = (countries: string[]) => {
    return countries.map((country) => <MenuItem key={country} country={`${country}`} />);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <HomeMenu />
          {mapcountries(countries)}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
