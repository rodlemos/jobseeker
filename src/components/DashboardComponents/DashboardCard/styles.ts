import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 0 3px #ccc;
  background-color: ${({ theme }) => theme.colors.shape};

  span {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  strong {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.secundaryDark};
  }

  a {
    color: ${({ theme }) => theme.colors.shadow};
    border: 1px solid rgba(0, 0, 0, 0.3);
    transition: 0.2s;
    padding: 4px 12px;
    border-radius: 12px;

    &:hover {
      color: ${({ theme }) => theme.colors.secundary};
      border-color: ${({ theme }) => theme.colors.secundary};
    }
  }
`;
