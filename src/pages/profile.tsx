import React from 'react';
import styled from 'styled-components';
import { Button } from '../components/Buttons';
import { Cards } from '../components/Cards';
import Navbar from '../components/Navbar';

const Container = styled.section`
  width: 90%;
  max-width: 900px;
  margin: 20px auto;
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
  label {
    width: 100%;
    display: inline-block;
    color: ${({ theme }) => theme.colors.primary};
  }
  input {
    width: 100%;
    height: 35px;
    padding-left: 5px;
    border: 1px solid ${({ theme }) => theme.colors.shadow};
    border-radius: 3px;
    outline: none;
  }
  input[type='text']:focus {
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.secundaryDark},
      0 0 0 1px ${({ theme }) => theme.colors.secundary};
  }
`;

const ProfileBox = styled(Cards)`
  margin-bottom: 30px;
  height: auto;
  h1 {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 20px;
  }
`;

const CheckInput = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  label {
    display: inline-flex;
    padding: 10px 20px;
    align-items: center;
    gap: 5px;
    background-image: linear-gradient(
      to right bottom,
      rgba(71, 61, 139, 0.8),
      rgba(17, 17, 83, 0.8)
    );
    border-radius: 3px;
    box-shadow: 1px 1px 3px #333;
    position: relative;
    color: white;
  }

  input[type='radio'] {
    display: flex;
    align-items: center;
    width: 15px;
    height: 15px;
  }
`;

export default function Profile(): JSX.Element {
  return (
    <>
      <Navbar />
      <Container>
        <ProfileBox>
          <h1>Dados Pessoais</h1>

          <header>
            <div className="photo">
              <img src="https://github.com/rodlemos.png" alt="" />
              <Button>Editar Foto</Button>
            </div>

            <form>
              <div className="formRow">
                <label>
                  Nome
                  <input type="text" />
                </label>
                <label>
                  Sobrenome
                  <input type="text" />
                </label>
              </div>
              <div className="formRow">
                <label>
                  Email
                  <input type="text" />
                </label>
                <label>
                  Sua cidade
                  <input type="text" />
                </label>
              </div>
            </form>
          </header>
        </ProfileBox>

        <ProfileBox>
          <h1>Habilidades</h1>

          <form>
            <div className="singleColumn">
              <label>
                Título do perfil
                <input type="text" />
              </label>
              <label>
                Nivel de experiência
                <CheckInput>
                  <label>
                    <input type="radio" name="level" />
                    Júnior
                  </label>
                  <label>
                    <input type="radio" name="level" />
                    Pleno
                  </label>
                  <label>
                    <input type="radio" name="level" />
                    Sênior
                  </label>
                </CheckInput>
              </label>
              <label>Área de atuação</label>
              <input type="text" />
            </div>
          </form>
        </ProfileBox>
      </Container>
    </>
  );
}
