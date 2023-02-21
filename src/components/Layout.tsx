import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Header from './Header';

export const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Box component="main" sx={{ marginY: 12, width: '100%' }}>
        <Container>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};
