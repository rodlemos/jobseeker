import Head from 'next/head';
import { Header } from '../components/DashboardComponents/Header';
import { ProfileCard } from '../components/DashboardComponents/ProfileCard';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Container, Content, Flex } from '../styles/dashboardStyles';

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
          <Header />
          <ProfileCard />
        </Content>
      </Flex>
    </Container>
  );
}
