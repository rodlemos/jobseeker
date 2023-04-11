import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  max-width: min(1200px, 100% - 2rem);
  margin-inline: auto;
  padding-block: 2rem;

  @media (min-width: 760px) {
    flex-direction: row;
  } ;
`;

export const Latest = styled.div`
  margin-top: 1rem;
  min-height: 200px;
  padding: 1.5rem;
  border-radius: 15px;
  box-shadow: 0 0 3px #ccc;
  background-color: ${({ theme }) => theme.colors.shape};

  & > h2 {
    margin-bottom: 1rem;
  }

  @media (min-width: 760px) {
    min-height: 320px;
  }
`;
