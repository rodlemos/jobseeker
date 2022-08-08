import React from 'react';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { GradientBtn } from '../Buttons';
import { Container, Searchbar, Wrapper } from './styles';

export default function Navbar(): JSX.Element {
  return (
    <Container>
      <Wrapper>
        <a href="#">
          My<span>Job</span>
        </a>

        <Searchbar>
          <input type="text" placeholder="Cargo" />
          <input type="text" placeholder="Cidade" />
          <GradientBtn type="submit">Pesquisar</GradientBtn>
        </Searchbar>

        <div className="wrapper">
          <IoChatbubblesOutline size={30} />
          <a href="/jobs">Vagas</a>
          <img src="https://github.com/rodlemos.png" alt="avata" />
        </div>
      </Wrapper>
    </Container>
  );
}
