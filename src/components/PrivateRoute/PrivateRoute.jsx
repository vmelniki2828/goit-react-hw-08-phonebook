import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { isLoggedInSelector } from 'redux/selectors';

export default function PrivateRoute() {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/login" />}</>;
}