import React from 'react'
import { DivStyled } from './Container.styled'
import PropTypes from 'prop-types';

export default function Container({ children }) {
  return (
    <DivStyled>
        {children}
    </DivStyled>
  )
}

Container.propTypes = {
  children: PropTypes.object.isRequired,
}