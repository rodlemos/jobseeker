import { DashboardCard } from '../DashboardCard';
import { Container, Greeting } from './styles';

interface Props {
  name: string;
}

export function Header({ name }: Props): JSX.Element {
  const names = name.split(' ');
  const firstName = names[0];

  return (
    <Container>
      <Greeting>
        <h2>
          Bem-vindo, <strong>{firstName}</strong>
        </h2>
        <p>
          Adicione suas principais competências para encontrar a vaga certa para
          você!
        </p>
      </Greeting>

      <DashboardCard title="Oportunidades" content="9" link="" />

      <DashboardCard title="Candidaturas" content="26" link="" />
    </Container>
  );
}
