import { signIn } from 'next-auth/react';
import { PrimaryButton } from '../components/Buttons/PrimaryButton';
import { Container } from '../styles/login';

export default function Home(): JSX.Element {
  return (
    <Container>
      <main>
        <span>Faça seu login na JobSeeker</span>
        <PrimaryButton
          onClick={() =>
            signIn('google', { callbackUrl: 'http://localhost:3000/dashboard' })
          }
        >
          Entrar
        </PrimaryButton>
      </main>
    </Container>
  );
}
