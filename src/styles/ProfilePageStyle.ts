import styled from 'styled-components';

export const Container = styled.section`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg};
`;

export const ProfileWrapper = styled.div`
  max-width: 900px;
  margin: 20px auto;
`;

export const ProfileBox = styled.div`
  margin-bottom: 30px;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 0 3px #ccc;
  background-color: ${({ theme }) => theme.colors.shape};
  height: auto;

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 20px;
  }

  header {
    display: flex;
  }
  header img {
    width: 120px;
    height: 120px;
  }
  .photo {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .formRow {
    width: 100%;
    padding: 0 5%;
    display: flex;
    gap: 15px;
  }
  .singleColumn {
    width: 80%;
    margin: 20px auto;
  }
  .singleColumn > label {
    margin-bottom: 10px;
  }
`;
