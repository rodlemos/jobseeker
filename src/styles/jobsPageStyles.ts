import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .grid {
    background-color: ${({ theme }) => theme.colors.shape};
    width: min(1500px, 100% - 2rem);
    margin: 20px auto;
    padding: 1rem;
    border-radius: 15px;
    box-shadow: 0 0 3px #ccc;

    @media (min-width: 1024px) {
      display: grid;
      height: calc(100vh - 100px);
      grid-template-columns: 0.7fr 1.3fr;
      grid-template-rows: 40px 1fr;
      column-gap: 10px;
      grid-template-areas:
        'jobNav jobNav'
        'jobList jobInfo';
    }
  }
`;

export const JobList = styled.div`
  grid-area: jobList;
  padding: 10px;
  width: 100%;
  max-height: 100%;
  overflow: auto;
  scrollbar-color: ${({ theme }) => theme.colors.secundaryDark}
    ${({ theme }) => theme.colors.opacity};
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 6px;
    background-color: ${({ theme }) => theme.colors.opacity};
  }

  &::-webkit-scrollbar-thumb {
    background-image: linear-gradient(
      ${({ theme }) => theme.colors.secundary},
      ${({ theme }) => theme.colors.secundaryDark}
    );
  }
`;

export const JobInfo = styled(JobList)`
  display: none;
  grid-area: jobInfo;
  padding: 0 20px 10px;

  @media (min-width: 1024px) {
    display: block;
  }

  header {
    display: flex;
    top: 0;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 20px;
    position: sticky;
    background-color: white;
    border-bottom: 1px solid ${({ theme }) => theme.colors.opacity};
  }

  header > div {
    flex: 1;
    padding-left: 8px;
  }

  header img {
    width: 72px;
    height: 72px;
  }

  header h1 {
    font-size: 1.4rem;
  }

  header strong {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.textLight};
  }

  header span {
    display: block;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textLight};
  }

  main {
    margin: 2rem 0;
  }

  main h2 {
    margin-bottom: 1.5rem;
  }

  main p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  main ul {
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }

  main li::marker {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;
