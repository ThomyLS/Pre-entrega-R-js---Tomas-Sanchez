import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';

const App = () => {

  return (
    <div>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path='/' element={ <ItemListContainer/> } />
          <Route path="/categoria/:idCategoria" element={ <ItemListContainer/> } />
          <Route path="/item/:idItem" element={ <ItemDetailContainer/> } />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App