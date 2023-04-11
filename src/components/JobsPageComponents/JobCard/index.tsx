import React from 'react';
import { Container } from './styles';

interface Props {
  job: {
    id: string;
    title: string;
    createdAt: string;
    logo?: {
      url: string;
    };
    company?: {
      name: string;
    };
    location: string;
  };
  onChangeJob?: (id: string) => void;
}

export default function JobCard({ job, onChangeJob }: Props): JSX.Element {
  const { company, createdAt, location, logo, title } = job;
  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <Container onClick={() => onChangeJob(job.id)}>
      <header>
        <img src={logo.url} alt="logo empresa" />
        <div>
          <h2>{title}</h2>
          <h3>{company.name}</h3>
          <span>{location}</span>
        </div>
      </header>

      <span>{formattedDate}</span>
    </Container>
  );
}
