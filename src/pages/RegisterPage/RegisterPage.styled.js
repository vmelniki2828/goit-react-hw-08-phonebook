import styled from 'styled-components';

export const RegisterInput = styled.input`

border-radius: 5px;
width: 250px;
height: 20px;

`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 20px;
  padding: 15px 0;
  align-items: center;
  
`;

export const Button = styled.button`
justify-content: flex-end;
border-radius: 10px;
 
  display: inline-flex;
  width: 150px;
  height: 35px;
  justify-content: center;
  align-items: center;
  

  transition: all 250ms linear;
  &:hover {
background-color: #22ff00;
  }
`;