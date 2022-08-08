import { Container } from './styles';

interface Props {
  title: string;
  content: string;
  link: string;
}

export function DashboardCard({ title, content, link }: Props): JSX.Element {
  return (
    <Container>
      <span>{title}</span>
      <strong>{content}</strong>
      <a href={link}>ver mais</a>
    </Container>
  );
}
