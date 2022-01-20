import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './Header';
import GlobalStyle from '../../styles/GlobalStyle';

const BaseLayout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container maxWidth={false} sx={{ maxWidth: '960px' }}>
        <Box display="flex" alignItems="center" flexDirection="column" height="100vh">
          <Header />
          <Container sx={{ flexGrow: '1', py: 3 }}>{children}</Container>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default BaseLayout;
