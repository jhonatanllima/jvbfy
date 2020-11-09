import React, { useState } from 'react';

import produce from 'immer';

import { loadLists } from '../../Services/api';

import BoardContext from './context';

import List from '../List';

import {Container} from './styles';

const data = loadLists(); // criada dessa forma pois vai exibir apenas uma vez

export default function Board(){
  const [lists, setLists] = useState(data);

  function move(fromList, toList, from, to ){
    setLists(produce(lists, draft => { // faz com que altere o abjeto imutável 
      const dragged = draft[fromList].cards[from];

      draft[fromList].cards.splice(from, 1); // removendo os items que estão sendo arrastados da lista
      draft[toList].cards.splice(to, 0, dragged); // coloco na nova posição do item
    }))
  }

  return(
    <BoardContext.Provider value={{lists, move}}>
      <Container> 
        {lists.map( (list, index) => <List key={list.title} index={index} data={list} />)}
      </Container>
    </BoardContext.Provider>
  );
}