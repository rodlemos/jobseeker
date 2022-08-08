import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  max-height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export const Flex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const Content = styled.section`
  flex: 1;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  max-width: 1200px;
  margin-inline: auto;
  padding: 2rem 0.5rem;
`;
