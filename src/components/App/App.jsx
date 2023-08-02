import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { currentUserThunk } from 'redux/auth/authOperations';
import { isRefreshingUserSelector } from 'redux/selectors';
import PublicRoute from '../PublicRoute/PublicRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Header from '../Header/Header';
import Container from '../Container/Container';
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUserThunk());
  }, [dispatch]);

  const isRefreshingUser = useSelector(isRefreshingUserSelector);

  return (
    <>
      {!isRefreshingUser && (
        <>
          <Header />
          <Container>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<PublicRoute />}>
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route path="/" element={<PrivateRoute />}>
                  <Route path="/contacts" element={<ContactsPage />} />
                </Route>
              </Routes>
            </Suspense>
          </Container>
        </>
      )}
    </>
  );
};