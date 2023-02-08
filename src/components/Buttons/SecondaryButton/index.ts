import styled from 'styled-components';
import { PrimaryButton } from '../PrimaryButton';

export const SecondaryButton = styled(PrimaryButton)`
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
