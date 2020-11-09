import React from 'react';

import {Container, Label} from './styles';

export default function Card(){
  return(
    <Container> 
      <header>
        <Label color="#2a69ae" />
      </header>

      <p>Fazer migração completa do servidor</p>
      <img src="https://scontent.fsod6-1.fna.fbcdn.net/v/t1.0-9/60336815_2153456471428416_4448021955991306240_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=YihjrNsYagMAX8AerBe&_nc_ht=scontent.fsod6-1.fna&oh=b4f737fed56a400a8100f303f64fbed4&oe=5FCE2B2A" alt=""/>
    </Container>
  );
}