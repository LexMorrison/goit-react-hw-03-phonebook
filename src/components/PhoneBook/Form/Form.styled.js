import styled from '@emotion/styled';

export const FormStyle = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const FormLabel = styled.label`
  display: flex;
`;

export const FormInput = styled.input`
  margin-left: 20px;
  max-width: 160px;
`;

export const FormInputNum = styled.input`
  margin-left: 5px;
  max-width: 160px;
`;

export const ButtonItem = styled.button`
  padding: 10px 20px;
  border-radius: 3px;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #45a049;
  }
`;
