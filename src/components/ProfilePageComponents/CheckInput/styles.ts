import styled from 'styled-components';

export const Container = styled.label`
  width: 100%;
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Check = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 760px) {
    flex-direction: row;
  }

  label {
    display: inline-flex;
    padding: 10px 20px;
    align-items: center;
    gap: 5px;
    background-image: linear-gradient(
      to right bottom,
      rgba(71, 61, 139, 0.8),
      rgba(17, 17, 83, 0.8)
    );
    border-radius: 3px;
    box-shadow: 1px 1px 3px #333;
    position: relative;
    color: white;
  }

  input[type='radio'] {
    display: flex;
    align-items: center;
    width: 15px;
    height: 15px;
  }
`;
