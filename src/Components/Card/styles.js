import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative; /** o header com as prioridades vao receber position absolute */
  background: #fff; /** cor de fundo */
  border-radius: 5px; /** borda arredondada */
  margin-bottom: 10px; /** margem externa da parte de baixo */
  padding: 15px; /** espaçamento interno de 15px em todo o conteúdo */
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8); /** sombra de 1px  4px de blur*/
  border-top: 20px solid rgba(230, 236, 245, 0.4); /** borda do topo, solida (bruta) rgba pois precisa de opacidade */
  cursor:grab; /** aquela mãozinha de arrastar */

  header{
    top: -22px;
    left: 15px;
    position: absolute; /** o card é relativo */

  }

  p{
    font-weight: 500;
    line-height: 20px;
  }

  img{
    width: 24px; /**Largura de 24 px */
    height: 24px; /**Altura de 24 px */
    border-radius: 2px; /**Canto arredondado */
    margin-top: 5px; /**margem topo externa de 5px*/
  }

  ${props => props.isDragging && css `
    border: 2px dashed rgba(0,0,0,0.2);
    padding-top: 31px;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    cursor:  grabbing;

    p, img, header{
      opacity: 0;
    }
  `}
`;

export const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 4px;

  display:inline-block;

  background: ${props => props.color}; /** recebo por propriedade a color do card no index.js */
`;