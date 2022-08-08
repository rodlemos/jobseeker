import { AiOutlineFileDone } from 'react-icons/ai';
import { FaRegListAlt } from 'react-icons/fa';
import { ImStatsBars } from 'react-icons/im';
import { Container, Menu } from './styles';

export default function Sidebar(): JSX.Element {
  return (
    <Container>
      <Menu>
        <li>
          <ImStatsBars size={20} color="white" /> Dashboard
        </li>
        <li>
          <FaRegListAlt size={20} color="white" />
          Oportunidades
        </li>
        <li>
          <AiOutlineFileDone size={20} color="white" />
          Candidaturas
        </li>
      </Menu>
    </Container>
  );
}
