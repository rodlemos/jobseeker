import styled from 'styled-components';

export const Container = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bg};
  overflow: hidden;

  .grid {
    display: grid;
    max-width: 1200px;
    max-height: calc(100vh - 100px);
    margin: 20px auto;
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 0 3px #ccc;
    background-color: ${({ theme }) => theme.colors.shape};
    grid-template-columns: 0.8fr 1.2fr;
    grid-template-rows: 40px 1fr;
    column-gap: 10px;
    grid-template-areas:
      'jobNav jobNav'
      'jobList jobInfo';
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
  grid-area: jobInfo;
  padding: 0 20px 10px;
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
  header h1 {
    font-size: 1.6rem;
  }
  header strong {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.textLight};
  }
  header span {
    display: block
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textLight};
  }
  main {
    margin: 20px 0;
  }
  main p {
    font-size: 0.9rem;
    margin-bottom: 15px;
  }
  main li {
    padding-left: 20px;
  }
  main li::marker {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;
