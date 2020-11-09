import React from 'react';
import { DndProvider } from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';

import GlobalStyle from './Themes/global';
import Main from './Pages/Main';


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalStyle />
      <Main />
    </DndProvider>
  );
}

export default App;
