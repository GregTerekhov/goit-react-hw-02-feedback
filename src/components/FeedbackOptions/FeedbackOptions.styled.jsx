import styled from '@emotion/styled';

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const OptionsButton = styled.button`
  width: 190px;
  font-size: 24px;
  color: #f4f4f4;
  background-color: #4e12d0;
  outline: none;
  border: 1px solid #ffffff;
  border-radius: 20px;
  padding: 16px 24px;
  cursor: pointer;
  box-shadow: 0 3px 9px #242424;
  transition: background-color 250ms ease, color 250ms ease,
    border-color 250ms ease;

  &:hover,
  &:focus {
    border-color: #4e12d0;
    color: #4e12d0;
    background-color: #f0ecf7;
  }
`;
