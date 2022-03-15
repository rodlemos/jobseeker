import styled from 'styled-components';

export const Cards = styled.div`
  padding: 25px;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0 0 3px #ccc;
`;

export const CountCard = styled(Cards)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.secundaryDark};
    position: relative;
  }
  h1::before {
    content: '';
    position: absolute;
    top: 50%;
    right: -25px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-left: 10px solid ${({ theme }) => theme.colors.secundary};
    border-bottom: 5px solid transparent;
  }
  h1::after {
    content: '';
    position: absolute;
    top: 50%;
    left: -25px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-right: 10px solid ${({ theme }) => theme.colors.secundary};
    border-bottom: 5px solid transparent;
  }
  p {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }
  span {
    color: #787878;
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.3);
  }
`;
