import styled from 'styled-components';

export const Content = styled.section`
  flex: 1;
  padding: 2rem 4rem;
  overflow: auto;

  main {
    display: grid;
    grid-template-columns: 1fr 0.5fr 0.5fr;
    grid-template-rows: auto 1fr;
    gap: 20px;
    .content h2 {
      font-size: 2rem;
      margin-bottom: 20px;
      font-weight: 400;
    }
    .content strong {
      color: ${({ theme }) => theme.colors.secundaryDark};
      font-weight: 700;
    }
    .full {
      grid-column: 1 / span 3;
    }
  }
`;
