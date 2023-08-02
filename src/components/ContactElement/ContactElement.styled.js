import styled from "styled-components"

export const Item = styled.li`
display: flex;
align-items:center ;
justify-content: space-between ;
`

export const Button = styled.button`
display: block;
width: 135px;
margin-left: auto;
transition: background-color 250ms linear;
outline: none;
&:hover{
    background-color: red;
    border-color: transparent;
}
`