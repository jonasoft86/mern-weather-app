import React from 'react';
import './App.css';
import BuscadorCiudad from './components/BuscadorCiudad';
import { Container } from 'react-bootstrap';
import useFetch from './hooks/useFetch';
import { baseUrl } from './config';
import ClimaList from './components/ClimaList';

function App() {

  //Custom Hook
  const { data, error, inProgress, setUrl } = useFetch();

  const getContent = () => {
    if (error) return <h2>Error en la carga: {error}</h2>;
    if (!data && inProgress) return <h2>Cargando...</h2>;
    if (!data) return null;
    return <ClimaList weathers={data.list} />;
  };

  return (
    <Container className="App">
      <BuscadorCiudad onSelectButtonClick={city => setUrl(baseUrl+`?city=${city}`)} />
      {getContent()}
    </Container>
  );
}

export default App;