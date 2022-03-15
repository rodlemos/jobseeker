import React from 'react';
import { ImStatsBars } from 'react-icons/im';
import { FaRegListAlt } from 'react-icons/fa';
import { AiOutlineFileDone } from 'react-icons/ai';
import { Container, Profile, Menu } from './styles';
import { GradientBtn } from '../Buttons';

export default function Sidebar(): JSX.Element {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/rodlemos.png" alt="avatar" />
        <h2>Rodrigo Lemos</h2>
        <h3>Web Developer</h3>
        <GradientBtn>
          <a href="/profile">Editar Perfil</a>
        </GradientBtn>
      </Profile>

      <Menu>
        <li className="selected">
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
