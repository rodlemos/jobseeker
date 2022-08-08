import React from 'react';
import { Container } from './styles';

export function JobFilters(): JSX.Element {
  return (
    <Container>
      <form>
        <select>
          <option>Data do Anúncio</option>
        </select>

        <select>
          <option>Nível de experiência</option>
        </select>

        <select>
          <option>Tipo de Vaga</option>
        </select>
      </form>
    </Container>
  );
}
