import { BiMessageSquareEdit } from 'react-icons/bi';
import { Container } from './styles';

export function ProfileCard(): JSX.Element {
  return (
    <Container>
      <header />
      <img src="http://github.com/rodlemos.png" alt="" />
      <strong>Rodrigo Lemos</strong>
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
