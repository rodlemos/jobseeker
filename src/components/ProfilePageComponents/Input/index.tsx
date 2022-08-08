import { Container } from './styles';

interface Props {
  label: string;
}

export function Input({ label }: Props): JSX.Element {
  return (
    <Container>
      {label}
      <input type="text" />
    </Container>
  );
}
