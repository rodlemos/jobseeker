import styled from 'styled-components';

export const Container = styled.nav`
  height: 60px;
  background-color: ${({ theme }) => theme.colors.shape};
  box-shadow: 0 0 10px 3px #ccc;
`;

export const Wrapper = styled.div`
  width: min(1500px, 100% - 2rem);
  height: 100%;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
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
    gap: 1.5rem;

    svg {
      cursor: pointer;
      transition: 0.2s;
    }

    a {
      display: flex;
      align-items: center;
      list-style-type: none;
      text-decoration: none;
      font-size: 1.2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.textLight};
      transition: 0.2s ease-in;

      &:hover {
        color: ${({ theme }) => theme.colors.highlight};
      }

      /*  & > div {
        display: grid;
        place-items: center;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.opacity};
      } */
    }

    .notifications {
      display: grid;
      place-items: center;
      padding: 6px;
      border: 1px solid ${({ theme }) => theme.colors.textLight};
      border-radius: 50%;
      transition: 0.4s;

      &:hover {
        border-color: ${({ theme }) => theme.colors.highlight};
        background-color: ${({ theme }) => theme.colors.highlight};
      }

      &:hover svg {
        fill: ${({ theme }) => theme.colors.shape};
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
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  input {
    width: min(300px, 40% - 2rem);
    height: 35px;
    padding-left: 5px;
    border: 2px solid ${({ theme }) => theme.colors.opacity};
    border-radius: 3px;
    font-size: 1rem;
    font-weight: 300;
    outline: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.colors.textLight};
    }

    &:focus {
      box-shadow: 0 0 4px ${({ theme }) => theme.colors.primaryShadow},
        0 0 0 1px ${({ theme }) => theme.colors.highlight};
    }
  }
`;
