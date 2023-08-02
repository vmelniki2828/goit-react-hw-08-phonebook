import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk } from 'redux/contacts/contactsOperations';

import { contactsSelector } from 'redux/selectors';
import { Button, Form, Input, Label } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);

  const [name, setName] = useState('');

  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.some(item => item.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${name} is already in contact`);
    }
    const newContact = {
      name,
      number,
    };

    dispatch(addContactsThunk(newContact));

    e.target.reset();
  };

  const saveDataFromInput = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          onChange={saveDataFromInput}
          placeholder="enter name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          onChange={saveDataFromInput}
          placeholder="enter phone number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button round="50%" type="submit">
        Add contact
      </Button>
    </Form>
  );
};