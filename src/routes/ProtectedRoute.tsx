import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux-hooks';

export const ProtectedRoute = () => {
  const { isAuth } = useAppSelector((state) => state.auth);

  if (!isAuth) {
    return <Navigate to={'/login'} replace />;
  }

  return <Outlet />;
};
