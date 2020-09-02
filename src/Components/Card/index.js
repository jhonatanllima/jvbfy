import React from 'react';

import {Container, Label} from './styles';

export default function Card(){
  return(
    <Container> 
      <header>
        <Label color="#2a69ae" />
      </header>

      <p>Fazer migração completa do servidor</p>
      <img src="https://api.adorable.io/avatars/100/abott@adorable.png" alt=""/>
    </Container>
  );
}