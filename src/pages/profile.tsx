import { Button } from '../components/Buttons';
import Navbar from '../components/Navbar';
import { CheckInput } from '../components/ProfilePageComponents/CheckInput';
import { Input } from '../components/ProfilePageComponents/Input';
import {
  Container,
  ProfileBox,
  ProfileWrapper,
} from '../styles/ProfilePageStyle';

export default function Profile(): JSX.Element {
  return (
    <Container>
      <Navbar />

      <ProfileWrapper>
        <ProfileBox>
          <h1>Dados Pessoais</h1>

          <header>
            <div className="photo">
              <img src="https://github.com/rodlemos.png" alt="" />
              <Button>Editar Foto</Button>
            </div>

            <form>
              <div className="formRow">
                <Input label="Nome" />
                <Input label="Sobrenome" />
              </div>

              <div className="formRow">
                <Input label="E-mail" />
                <Input label="Sua cidade" />
              </div>
            </form>
          </header>
        </ProfileBox>

        <ProfileBox>
          <h1>Habilidades</h1>

          <form>
            <div className="singleColumn">
              <Input label="Título do perfil" />

              <CheckInput
                title="Nível de experiência"
                inputName="level"
                options={['Júnior', 'Pleno', 'Sênior']}
              />
              <Input label="Área de atuação" />
            </div>
          </form>
        </ProfileBox>
      </ProfileWrapper>
    </Container>
  );
}
