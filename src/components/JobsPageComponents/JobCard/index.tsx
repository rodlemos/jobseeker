import React from 'react';
import { Container } from './styles';

export default function JobCard(): JSX.Element {
  return (
    <Container>
      <header>
        <img
          src="https://media.istockphoto.com/vectors/dent-icon-tooth-logotype-dental-office-logo-vector-illustration-vector-id1065422124?k=6&m=1065422124&s=170667a&w=0&h=IIRXLquSMYX75Ettp6A4QTX6AW0AKi-IUwoHhXJ4Cmw="
          alt="logo empresa"
        />
        <div>
          <h2>Emprego Parapapá</h2>
          <h3>Empresa Tchururu</h3>
          <span>Localidade</span>
        </div>
      </header>

      <span>22/11/2022</span>
    </Container>
  );
}
