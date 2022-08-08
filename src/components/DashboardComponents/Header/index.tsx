import { DashboardCard } from '../DashboardCard';
import { Container, Greeting } from './styles';

export function Header(): JSX.Element {
  return (
    <Container>
      <Greeting>
        <h2>
          Bem-vindo, <strong>Rodrigo</strong>
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
