import styled from 'styled-components';

export const Container = styled.div`
  display: flex; /**elemento de forma horizontal, nesse caso influenciou o flex-basis horizontalmente */
  padding: 30px 0; /**espaçamento interno em cima e em baixo */
  height: calc(100% - 80px) /**dessa forma ele ocupa 100% da altura menos 80px necessário no global o height estar 100% tbm */
`;