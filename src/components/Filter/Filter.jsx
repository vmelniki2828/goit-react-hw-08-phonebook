import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterChange } from 'redux/filterSlice';
import { filterSelector } from 'redux/selectors';
import { Label } from './Filter.styled';
import { Input } from './Filter.styled';

export function Filter() {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();
  const saveDataFromInput = e => {
    const { value } = e.target;
    dispatch(filterChange(value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        name="filter"
        value={filter}
        onChange={saveDataFromInput}
        type="text"
      />
    </Label>
  );
}