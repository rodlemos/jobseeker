import styled from "styled-components";

export const JobsBox = styled.section`
    width: 100%;
    height: calc(100vh - 60px);
    margin: 0 auto;
    padding: 20px 5%;
    overflow: hidden;
   .grid {
       width: 100%;
       height: 100%;
       display: grid;
       grid-template-columns: 0.8fr 1.2fr;
       grid-template-rows: 40px 1fr;
       column-gap: 10px;
       grid-template-areas:
        "jobNav jobNav"
        "jobList jobInfo";
   }
`;

export const JobNav = styled.div`
    grid-area: jobNav;
    form {
        width: 100%;
        display: flex;
        gap: 10px;
    }
    select {
        padding: 5px 30px;
        border: 2px solid ${({ theme }) => theme.colors.opacity};
        border-radius: 3px;
        font-size: .9rem;
        outline: transparent;
    }

`;

export const JobList = styled.div`
    grid-area: jobList;
    padding: 10px;
    width: 100%;
    max-height: 100%;
    overflow: auto;
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
        border-bottom: 1px solid ${({theme})=> theme.colors.opacity}

    }
    header h1 {
        font-size: 1.6rem;
    }
    header h2 {
        font-size: 1.2rem;
    }
    header p {
        font-size: .9rem;
    }
    main {
        margin: 20px 0;
    }
    main p {
        font-size: .9rem;
        margin-bottom: 15px;
    }
    main li {
        padding-left: 20px;
    }
    main li::marker {
        font-size: .7rem;
        color: ${({ theme }) => theme.colors.text}
    }
`;