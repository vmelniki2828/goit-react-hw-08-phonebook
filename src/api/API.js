import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signupFoo = async credentials => {
  const { data } = await axios.post('users/signup', credentials);

  return data;
};

export const loginFoo = async credentials => {
  const { data } = await axios.post('users/login', credentials);

  return data;
};

export const logoutFoo = async () => {
  const { data } = await axios.post('users/logout');

  return data;
};

export const getCurrentUser = async () => {
  const { data } = await axios.get('users/current');

  return data;
};

export const getContacts = async () => {
  const { data } = await axios.get('contacts');

  return data;
};

export const postContacts = async contact => {
  const { data } = await axios.post('contacts', contact);

  return data;
};

export const deleteContacts = async id => {
  const { data } = await axios.delete(`contacts/${id}`);

  return data;
};