import styled from 'styled-components';

export const Container = styled.aside`
  max-width: 300px;
  height: calc(100vh - 60px);
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.primaryDark}
  );
  overflow: hidden;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  h2 {
    color: white;
    font-weight: 700;
  }

  h3 {
    color: white;
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

export const Menu = styled.ul`
  li {
    padding: 1rem 2rem;
    display: flex;
    gap: 10px;
    align-items: center;
    list-style-type: none;
    font-size: 1.1rem;
    color: white;
    cursor: pointer;
    letter-spacing: 0.05rem;
  }
  .selected {
    background-color: ${({ theme }) => theme.colors.highlight};
  }
`;
