import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 20px;
  padding: 15px 0;
  align-items: flex-end;
  
`;

export const DivForm = styled.div`
display: flex;
justify-content: flex-end;
`

export const Input = styled.input`
  width: 210px;
  height: 20px;
  padding-left: 10px;
  border-radius: 5px;
 
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

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;