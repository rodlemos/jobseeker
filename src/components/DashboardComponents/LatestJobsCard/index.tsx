import React from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import { AiOutlineFileText } from 'react-icons/ai';
import { Container } from './styles';

interface Props {
  job: {
    id: string;
    title: string;
    slug: string;
    createdAt: string;
    logo?: {
      url: string;
    };
    location: string;
    contract: string;
  };
}

export default function JobCard({ job }: Props): JSX.Element {
  const { createdAt, location, logo, title, slug, contract } = job;
  const formattedDate = new Date(createdAt).toLocaleDateString();

  return (
    <Container href="/jobs">
      <header>
        <img src={logo.url} alt="logo empresa" />

        <div>
          <h2>{title}</h2>
          <span>{formattedDate}</span>

          <footer>
            <div>
              <BiCurrentLocation /> <span>{location}</span>
            </div>
            <div>
              <AiOutlineFileText /> <span>{contract}</span>
            </div>
          </footer>
        </div>
      </header>
    </Container>
  );
}
