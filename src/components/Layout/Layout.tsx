import { Box, Container } from '@mui/material';
import React, { ReactNode } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box>
      <Header />
      <Container sx={{ marginTop: 3, minHeight: '100vh' }}>
        <Outlet />
      </Container>
    </Box>
  );
};
