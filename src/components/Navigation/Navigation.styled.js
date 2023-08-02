import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const NavLinkStyled = styled(NavLink)`
color: black;
opacity: 0.5;
transition: opacity 400ms linear;

text-decoration: none;

&:hover, &:focus {
    opacity: 1;
}



&.active{
    opacity: 1;
    font-weight: bold ;

}
`

export const List = styled.ul`
display: flex;
list-style: none;
gap: 30px;
justify-content: flex-end;

`