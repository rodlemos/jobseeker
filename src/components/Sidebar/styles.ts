import styled from 'styled-components';

export const Container = styled.aside`
  max-width: 250px;
  height: calc(100% - 60px);
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primaryDark}
  );
`;

export const Menu = styled.ul`
  margin-top: 4rem;
  li {
    padding: 1rem 1.5rem;
    display: flex;
    gap: 10px;
    align-items: center;
    list-style-type: none;
    font-size: 1rem;
    color: white;
    cursor: pointer;
    letter-spacing: 0.05rem;
  }
  .selected {
    background-color: ${({ theme }) => theme.colors.highlight};
  }
`;
