import styled from 'styled-components';

export const GradientBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  height: 35px;
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.secundary},
    ${({ theme }) => theme.colors.secundaryDark}
  );
  border: transparent;
  border-bottom: 3px solid rgba(0, 0, 0, 0.3);
  color: white;
  cursor: pointer;
  transition: 0.5s;
  a {
    text-decoration: none;
    color: white;
  }
  &:hover {
    background-image: linear-gradient(
      rgba(102, 205, 171, 0.8),
      rgba(32, 178, 171, 0.8)
    );
  }
`;

export const Button = styled(GradientBtn)`
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.highlight},
    ${({ theme }) => theme.colors.primary}
  );
  border: 1px solid ${({ theme }) => theme.colors.highlight};
  border-radius: 5px;
  padding: 0 20px;
  font-size: 0.9rem;
  &:hover {
    background-image: linear-gradient(
      rgba(53, 85, 228, 0.9),
      rgba(17, 17, 83, 0.9)
    );
  }
`;

export const OutlineBtn = styled.button`
  background-color: transparent;
  border: transparent;
`;
