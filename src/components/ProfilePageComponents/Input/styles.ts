import styled from 'styled-components';

export const Container = styled.label`
  width: 100%;
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};

  input {
    width: 100%;
    height: 35px;
    padding-left: 5px;
    border: 1px solid ${({ theme }) => theme.colors.shadow};
    border-radius: 3px;
    outline: none;
  }

  input[type='text']:focus {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.secundaryDark},
      0 0 0 1px ${({ theme }) => theme.colors.secundary};
  }
`;
