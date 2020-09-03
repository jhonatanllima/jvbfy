import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px; /**espaçamento interno nas laterais de 15px */
  height: 100%; /**altura de 100% */
  flex: 0 0 320px; /** união de flex grow habilidade de esticar mais do que o necessário, flex-shrink possibilidade do elemento reduzir e flex-basis determina o tamanho base desse elemento */

  & + div{/**todo elemento que precede o primeiro pega essa estilização, toda div que tem antes dela outra div */
    border-left: 1px solid rgba(0,0,0,0.2); /** uma borda solida a esquerda com 5% de opacidade */    
  }

  header{
      display: flex; /**  para um elemento ficar dentro do outro*/
      justify-content: space-between; /**  para que cada um deles fique em um canto*/ 
      align-items: center; /** por que o button vai ser maior que o h2 */
      height: 42px; /** altura fixa de 42 pixels */
      margin-bottom: 20px; /** margem do conteúdo de 20px */

    h2{
      font-weight: 600; /** o quanto ela é negrito */
      font-size: 16px;/** o tamanho dela */
      padding: 0 10px; /** espaçamento interno nas laterais de 10px */

    }

    button {
      width: 33px; /** largura */
      height: 33px; /** altura */
      border-radius: 2px;
      background: #2a69ab; /** cor de fundo */
      border: 0; /** tirar a borda preta */
      cursor: pointer; /** pra virar a mãozinha */
    }

    ul{
      margin-top: 30px; /** margem externa de 30px */
    }
  }
`;