import { Box, Container } from '@mui/material';
import React, { ReactNode } from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar/Toolbar';

export const Layout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Box component="main" sx={{ marginY: 12, width: '100%' }}>
        <Outlet />
      </Box>
    </Box>
  );
};
