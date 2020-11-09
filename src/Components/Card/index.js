import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context';

import {Container, Label} from './styles';

export default function Card({ data, index, listIndex }){
  const ref = useRef();
  const { move } = useContext(BoardContext);


  const [{ isDragging }, dragRef] =useDrag({
    item: {type: 'CARD', index, listIndex},
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor){
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if(draggedIndex ===  targetIndex && draggedListIndex === targetListIndex){
        return;
      }

      const targetSize = ref.current.getBoundingClientRect(); // retorna o tamanho do elemento.
      const targetCenter =  (targetSize.bottom - targetSize.top / 2); // retorna o ponto central do card. 

      const draggedOffset = monitor.getClientOffset(); // retorna qual a distância que eu arrastei.
      const  draggedTop = draggedOffset.y - targetSize.top; // distancia do card em cima de outro card com relação ao topo. 

      if(draggedIndex < targetIndex && draggedTop < targetCenter){
        //se a posição item que eu estou arrastando está antes do item que sofre o arraste
        // e a posição do meu drag for menor que o centro do item, não vou fazer nada,
        // evita cálculos desnecessários para quando ela nao vai acontecer, ou seja
        // se eu for arrastar na mesma posição, não faça nada.
        return;
      }

      if(draggedIndex > targetIndex && draggedTop > targetCenter){
        // aqui faz o contrário da função de cima.
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  });

  dragRef(dropRef(ref));

  return(
    <Container ref={ref} isDragging={isDragging}> 
      <header>
        {data.labels.map(label => <Label  key={label} color={label} />)}
      </header>

      <p>{data.content}</p>
      
      {data.user && <img src={data.user} alt=""/>}
    </Container>
  );
}