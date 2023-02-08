import React from 'react';
import { Container } from './styles';

export function JobFilters(): JSX.Element {
  return (
    <Container>
      <form>
        <select name="data" id="data">
          <option>Data do Anúncio</option>
        </select>

        <select>
          <option hidden>Nível de experiência</option>
          <option>Todos</option>
          <option>Júnior</option>
          <option>Pleno</option>
          <option>Senior</option>
        </select>

        <select>
          <option hidden>Tipo de Vaga</option>
          <option>Todos</option>
          <option>CLT</option>
          <option>PJ</option>
        </select>
      </form>
    </Container>
  );
}
