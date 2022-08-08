import styled from 'styled-components';

export const Container = styled.header`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: 1fr 200px 200px;
`;

export const Greeting = styled.div`
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 0 3px #ccc;
  background-color: ${({ theme }) => theme.colors.shape};

  h2 {
    font-size: 1.5rem;

    strong {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.colors.secundaryDark};
    }
  }

  p {
    font-weight: 300;
    line-height: 1.4;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;
