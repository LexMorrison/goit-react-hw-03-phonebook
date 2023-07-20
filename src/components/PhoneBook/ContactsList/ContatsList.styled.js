import styled from '@emotion/styled';

export const ListOfPpl = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const DeleteButt = styled.button`
  padding: 5px 5px;
  border-radius: 3px;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #45a049;
  }
`;
