import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { Header } from '../components/DashboardComponents/Header';
import { ProfileCard } from '../components/DashboardComponents/ProfileCard';
import Navbar from '../components/Navbar';
import { Container, Content, Latest } from '../styles/dashboardStyles';
import { useGetLatestJobsQuery } from '../graphql/generated';
import LatestJobsCard from '../components/DashboardComponents/LatestJobsCard';

export default function Dashboard(): JSX.Element {
  const { data: session } = useSession();
  const { data } = useGetLatestJobsQuery();

  return session ? (
    <Container>
      <Head>
        <title>Myjob | Dashboard</title>
      </Head>

      <Navbar />

      <Content>
        <main>
          <Header name={session.user?.name} />
          <Latest>
            <h2>Últimos anúncios</h2>
            {data?.jobs.map(job => (
              <LatestJobsCard key={job.id} job={job} />
            ))}
          </Latest>
        </main>
        <ProfileCard name={session.user?.name} avatar={session.user?.image} />
      </Content>
    </Container>
  ) : (
    <span>loading</span>
  );
}
