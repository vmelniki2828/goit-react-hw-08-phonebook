import React from 'react'
import { DivStyled } from './Container.styled'

export default function Container({ children }) {
  return (
    <DivStyled>
        {children}
    </DivStyled>
  )
}