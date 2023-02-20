import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux-hooks';

export const ProtectedRoute = () => {
  const isLoggedIn = useAppSelector((state) => state.user.isAuth);

  if (!isLoggedIn) {
    return <Navigate to={'/login'} replace />;
  }

  return <Outlet />;
};
