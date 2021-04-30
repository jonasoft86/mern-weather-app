import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';

const BuscadorCiudad = ({ onSelectButtonClick }) => {
  const [city, setCity] = useState(null);

  return (
    <>
      <div className="input-search">
        <div className="input-group">
          <FormControl
            placeholder="Nombre ciudad a buscar"
            onChange={e => setCity(e.target.value)}
          />

          <div className="input-group-append">
            <button onClick={() => onSelectButtonClick(city)} type="submit" className="btn btn-dark">
              <span STYLE="font-size:16px">
                <i className="fas fa-search" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
};

export default BuscadorCiudad;
