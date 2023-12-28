import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';

const App = () => {
  return (
    <div>
      <NavBar/>

      <ItemListContainer greeting ={"Bienvenido a ArGhost, el mejor lugar para Hostear tu servidor."} />
    </div>
  )
}

export default App