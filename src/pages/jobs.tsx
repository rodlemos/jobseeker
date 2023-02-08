import { RichText } from '@graphcms/rich-text-react-renderer';
import Head from 'next/head';
import { useState, useEffect, useCallback } from 'react';
import { TiInputChecked } from 'react-icons/ti';
import { SecondaryButton } from '../components/Buttons/SecondaryButton';
import JobCard from '../components/JobsPageComponents/JobCard';
import { JobFilters } from '../components/JobsPageComponents/JobFilters';
import Navbar from '../components/Navbar';
import { useGetJobsQuery } from '../graphql/generated';
import { Container, JobInfo, JobList } from '../styles/jobsPageStyles';

export default function JobsPage(): JSX.Element {
  const { data } = useGetJobsQuery();
  const [current, setCurrent] = useState(null);

  const handleJobSelection = useCallback(
    (id: string) => {
      const selected = data?.jobs.find(job => job.id === id);
      setCurrent(selected);
    },
    [data?.jobs]
  );

  useEffect(() => {
    setCurrent(data?.jobs[0]);
  }, [data]);

  return (
    <Container>
      <Head>
        <title>Myjob | Jobs</title>
      </Head>

      <Navbar />

      <div className="grid">
        <JobFilters />

        <JobList>
          {data?.jobs.map(job => {
            return (
              <JobCard
                job={job}
                key={job.id}
                onChangeJob={handleJobSelection}
              />
            );
          })}
        </JobList>

        <JobInfo>
          {current ? (
            <>
              <header>
                <div>
                  <img src={current.logo.url} alt="Company Logo" />
                  <div>
                    <h1>{current.title}</h1>
                    <strong>{current.company.name}</strong>
                    <span>{current.location}</span>
                  </div>
                </div>

                <SecondaryButton>
                  <TiInputChecked size={24} color="white" />
                  Candidatar-se
                </SecondaryButton>
              </header>

              <main>
                <RichText content={current.description.raw} />
              </main>
            </>
          ) : (
            <span>Loading</span>
          )}
        </JobInfo>
      </div>
    </Container>
  );
}
