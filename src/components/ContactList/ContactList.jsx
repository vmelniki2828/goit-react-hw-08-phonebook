import React, { useState } from 'react';

import { ContactsTitle, List } from './ContactList.styled';
import { ContactElement } from '../ContactElement/ContactElement';
import { useSelector } from 'react-redux';
import { filteredContactsSelector } from 'redux/selectors';

export function ContactList() {
  const [elId, setElId] = useState('');

  const idChanger = id => {
    setElId(id);
  };

  const contacts = useSelector(filteredContactsSelector);
  return (
    <>
      <ContactsTitle>Contacts</ContactsTitle>
      <List>
        {contacts.map(item => (
          <ContactElement
            elId={elId}
            idChanger={idChanger}
            id={item.id}
            key={item.id}
            name={item.name}
            number={item.number}
          />
        ))}
      </List>
    </>
  );
}