import Head from 'next/head';
import { Cards, CountCard } from '../components/Cards';
import Navbar from '../components/Navbar';
import { Container, Flex } from '../components/PageContainers/styles';
import Sidebar from '../components/Sidebar';
import { Content } from '../styles/dashboardStyles';

export default function Dashboard(): JSX.Element {
  return (
    <Container>
      <Head>
        <title>Myjob | Dashboard</title>
      </Head>
      <Navbar />
      <Flex>
        <Sidebar />
        <Content>
          <main>
            <Cards className="content">
              <h2>
                Bem-vindo, <strong>Rodrigo</strong>
              </h2>
              <p>
                Mantenha seu perfil sempre atualizado com suas últimas
                experiências. Adicione suas principais competências para
                encontrar a vaga certa para você!
              </p>
            </Cards>

            <CountCard>
              <h1>9</h1>
              <p>Oportunidades</p>
              <span>Ver mais</span>
            </CountCard>

            <CountCard>
              <h1>20</h1>
              <p>Candidaturas</p>
              <span>Ver mais</span>
            </CountCard>

            <Cards className="content full" />
          </main>
        </Content>
      </Flex>
    </Container>
  );
}
