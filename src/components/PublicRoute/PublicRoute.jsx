import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { isLoggedInSelector } from 'redux/selectors';

export default function PublicRoute() {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return <>{isLoggedIn ? <Navigate to="/contacts" /> : <Outlet />}</>;
}