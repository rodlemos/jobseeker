import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 1rem 5px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.opacity};
  cursor: pointer;

  header {
    display: flex;
    gap: 1rem;
  }

  img {
    width: 50px;
    height: 50px;
  }

  h2 {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  b {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.secundaryDark};
  }

  span {
    font-size: 1rem;
  }

  footer {
    display: flex;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;
