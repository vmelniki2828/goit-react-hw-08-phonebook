import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loginThunk } from 'redux/auth/authOperations';
import { Form, Button, Input, DivForm } from './LoginPage.styled';

export default function LoginPage() {

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const inputs = {
    email: setEmail,
    password: setPassword,
  };

  const getData = e => {
    inputs[e.target.name](e.target.value);
  };

const dispatch = useDispatch();

const onSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk({ email, password}))
}

  return (
    <DivForm>
      <Form onSubmit={onSubmit}>
        <Input placeholder="enter your email" name="email" onChange={getData} type="email" value={email} />
        <Input placeholder="enter your password" name="password" onChange={getData} type="password" value={password} />
        <Button type="submit">Login</Button>
      </Form>
    </DivForm>
  );
}