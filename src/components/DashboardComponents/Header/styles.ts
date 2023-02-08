import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (min-width: 760px) {
    flex-wrap: nowrap;
  }
`;

export const Greeting = styled.div`
  padding: 1.5rem;
  flex-basis: 100%;
  border-radius: 15px;
  box-shadow: 0 0 3px #ccc;
  background-color: ${({ theme }) => theme.colors.shape};

  @media (min-width: 760px) {
    flex-basis: auto;
  }

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
