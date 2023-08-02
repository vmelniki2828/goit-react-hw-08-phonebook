import Container from 'components/Container/Container';
import { Navigation } from 'components/Navigation/Navigation'
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react'
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from 'redux/selectors'
import { HeaderStyled } from './Header.styled';

export default function Header() {

    const isLoggedIn = useSelector(isLoggedInSelector);
  return (
    
    <HeaderStyled>
    <Container>    
    <Navigation/>
    { isLoggedIn && <UserMenu/>}
    </Container>
    </HeaderStyled>
    
  )
}