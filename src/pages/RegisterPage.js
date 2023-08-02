import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/authOperations';
import { RegisterInput, Form, Button } from './RegisterPage.styled';
export default function RegisterPage() {

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const inputs = {
    name: setName,
    email: setEmail,
    password: setPassword,
  };

  const getData = e => {
    inputs[e.target.name](e.target.value);
  };

const dispatch = useDispatch();

const onSubmit = e => {
    e.preventDefault();
    dispatch(registerThunk({ name, email, password}))
}

  return (
    <>
      <Form onSubmit={onSubmit}>
        <RegisterInput placeholder="enter your name" name="name" onChange={getData} value={name} type="text" />
        <RegisterInput placeholder="enter your email" name="email" onChange={getData} type="email" value={email} />
        <RegisterInput placeholder="enter your password" name="password" onChange={getData} type="password" value={password} />
        <Button type="submit">Register</Button>
      </Form>
    </>
  );
}