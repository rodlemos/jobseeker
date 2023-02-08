import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secundary}
  );

  main {
    display: grid;
    padding: 3rem 2rem;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.shape};
    margin: auto;
    gap: 1rem;

    span {
      font-size: 1.2rem;
    }
  }
`;
