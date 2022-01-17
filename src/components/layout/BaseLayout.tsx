import React from 'react';
import Container from '@mui/material/Container';
import Header from './Header';
import GlobalStyle from '../../styles/GlobalStyle';

const BaseLayout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Container sx={{ maxWidth: '1382px' }}>
        <Header />
        <Container sx={{ flexGrow: 1, py: 3 }}>{children}</Container>
      </Container>
    </React.Fragment>
  );
};

export default BaseLayout;
