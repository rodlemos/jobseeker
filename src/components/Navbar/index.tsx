import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { IoBriefcaseSharp, IoNotifications } from 'react-icons/io5';
import { PrimaryButton } from '../Buttons/PrimaryButton';
import { Container, Searchbar, Wrapper } from './styles';

export default function Navbar(): JSX.Element {
  const { data: session } = useSession();

  return (
    <Container>
      <Wrapper>
        <a href="/">
          <p>
            My<span>Job</span>
          </p>
        </a>

        <Searchbar>
          <input type="text" placeholder="Cargo" />
          <input type="text" placeholder="Cidade" />
          <PrimaryButton type="submit">Pesquisar</PrimaryButton>
        </Searchbar>

        <div className="wrapper">
          <Link href="/dashboard">
            <AiFillHome size={25} />
          </Link>

          <Link href="/jobs">
            <IoBriefcaseSharp size={25} />
          </Link>

          <Link href="/">
            <IoNotifications size={25} />
          </Link>

          <Link href="/profile">
            {session ? (
              <img
                src={session.user.image}
                alt="profile"
                referrerPolicy="no-referrer"
              />
            ) : (
              <img src="avatar.jpg" alt="profile" />
            )}
          </Link>
        </div>
      </Wrapper>
    </Container>
  );
}
