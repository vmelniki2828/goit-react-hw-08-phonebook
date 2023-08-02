import React from 'react';
import PropTypes from 'prop-types';
import { Button, Item } from './ContactElement.styled';
import { useDispatch, useSelector } from 'react-redux';

import { Dna } from 'react-loader-spinner';

import { deleteContactsThunk } from 'redux/contacts/contactsOperations';
import { isLoadingSelector } from 'redux/selectors';

export function ContactElement({ name, number, id, elId, idChanger }) {

  const isLoading = useSelector(isLoadingSelector);

  const dispatch = useDispatch();

  const deleteContactFromState = e => {
    idChanger(e.target.dataset.id);
    dispatch(deleteContactsThunk(e.target.dataset.id));
  };

  return (
    <Item>
      {name}: {number}
      {isLoading && elId === id ? (
        <Dna height="40" width="80" />
      ) : (
        <Button onClick={deleteContactFromState} data-id={id}>
          Delete contact
        </Button>
      )}
    </Item>
  );
}

ContactElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  elId: PropTypes.string.isRequired,
  idChanger: PropTypes.func.isRequired,
};