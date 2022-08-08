import styled from 'styled-components';

export const Container = styled.div`
  grid-area: jobNav;
  form {
    width: 100%;
    display: flex;
    gap: 10px;
  }
  select {
    padding: 5px 30px;
    border: 2px solid ${({ theme }) => theme.colors.opacity};
    border-radius: 3px;
    font-size: 0.9rem;
    outline: transparent;
  }
`;
