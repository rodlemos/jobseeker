import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.shape};
  box-shadow: 0 0 10px 3px #ccc;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1220px) {
    padding: 1rem;
  }

  a {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 400;
  }
  span {
    color: ${({ theme }) => theme.colors.secundaryDark};
    font-weight: 500;
  }
  .wrapper {
    display: flex;
    align-items: center;
    gap: 30px;

    svg {
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        stroke: ${({ theme }) => theme.colors.highlight};
      }
    }

    a {
      list-style-type: none;
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.primaryDark};
      transition: 0.2s;

      &:hover {
        color: ${({ theme }) => theme.colors.highlight};
      }
    }
    img {
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }
`;

export const Searchbar = styled.form`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  input {
    width: 300px;
    height: 35px;
    padding-left: 5px;
    border: 2px solid ${({ theme }) => theme.colors.opacity};
    border-radius: 3px;
    font-size: 1rem;
    outline: transparent;
  }
  input:focus {
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.primaryShadow},
      0 0 0 1px ${({ theme }) => theme.colors.highlight};
  }
`;
