import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.opacity};
  cursor: pointer;

  header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  img {
    width: 40px;
    height: 40px;
  }

  h2 {
    font-size: 1.1rem;
  }

  h3 {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textLight};
  }

  span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;
