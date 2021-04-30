import React from 'react';
import './App.css';
import BuscadorCiudad from './components/BuscadorCiudad';
import { Container } from 'react-bootstrap';

function App() {

  const getContent = () => {
  };

  return (
    <Container className="App">
      <BuscadorCiudad  />
      {getContent()}
    </Container>
  );
}

export default App;