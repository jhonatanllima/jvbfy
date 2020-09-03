import styled from 'styled-components';

export const Container = styled.div`
  position: relative; /** o header com as prioridades vao receber position absolute */
  background: #fff; /** cor de fundo */
  border-radius: 5px; /** borda arredondada */
  margin-bottom: 10px; /** margem externa da parte de baixo */
  padding: 15px; /** espaçamento interno de 15px em todo o conteúdo */
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8); /** sombra de 1px  4px de blur*/
  border-top: 20px solid rgba(230, 236, 245, 0.4); /** borda do topo, solida (bruta) rgba pois precisa de opacidade */

  header{
    position: absolute; /** o card é relativo */
  }

  img{
    width: 24px; /**Largura de 24 px */
    height: 24px; /**Altura de 24 px */
    border-radius: 2px; /**Canto arredondado */
    margin-top: 5px; /**margem topo externa de 5px*/
  }

`;

export const Label = styled.span`


`;