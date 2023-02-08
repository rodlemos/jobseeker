import styled from 'styled-components';

export const Container = styled.div`
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 15px;
  box-shadow: 0 0 3px #ccc;
  overflow: hidden;
  position: relative;

  header {
    width: 100%;
    height: 110px;
    display: grid;
    place-items: center;
    padding-block: 1rem;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  img {
    width: 80px;
    aspect-ratio: 1;
    border-radius: 50%;
    margin-top: -50px;
  }

  button {
    width: 30px;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    background-color: ${({ theme }) => theme.colors.bg};
    border: transparent;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.textLight};
    position: absolute;
    right: 1rem;
    top: 0.5rem;
  }

  strong {
    margin-top: 1rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  span {
    /* margin-top: 0.5rem; */
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textLight};
  }

  p {
    padding: 1.5em 1.5em 3em;
    font-size: 0.875rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.textLight};
  }
`;
