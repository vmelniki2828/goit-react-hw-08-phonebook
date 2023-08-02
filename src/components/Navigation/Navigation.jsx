import React from 'react';
import { useSelector } from 'react-redux';

import { isLoggedInSelector } from 'redux/selectors';
import { NavLinkStyled, List } from './Navigation.styled';

export function Navigation(props) {

  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <List>
      { !isLoggedIn ? 
      <>
      <li>
        <NavLinkStyled to="/register">Register</NavLinkStyled>
      </li>

      <li>
        <NavLinkStyled to="/login">Login</NavLinkStyled>
      </li>
      </>
       :
      <li>
        <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
      </li>}
    </List>
  );
}