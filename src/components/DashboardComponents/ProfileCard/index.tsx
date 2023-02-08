import { BiMessageSquareEdit } from 'react-icons/bi';
import { Container } from './styles';

interface Props {
  name: string;
  avatar: string;
}

export function ProfileCard({ avatar, name }: Props): JSX.Element {
  return (
    <Container>
      <header />
      <img src={avatar} alt="Avatar" referrerPolicy="no-referrer" />
      <strong>{name}</strong>
      <span>FullStack Developer</span>
      <button type="button">
        <BiMessageSquareEdit size={20} />
      </button>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta iste
        neque aliquid nulla facilis soluta praesentium eos laborum, dolor
        expedita!
      </p>
    </Container>
  );
}
