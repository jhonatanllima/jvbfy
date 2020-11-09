import React from 'react';

import { loadLists } from '../../Services/api';

import List from '../List';

import {Container} from './styles';

const lists = loadLists(); // criada dessa forma pois vai exibir apenas uma vez

export default function Board(){
  return(
    <Container> 
      {lists.map( list => <List key={list.title} data={list} />)}
    </Container>
  );
}