import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ClimaCard from './ClimaCard';

const ClimaList = ({ weathers }) => (

  <Row>
    {weathers.map(({ dt, temp, weather }, index) =>
      <Col key={index}>
        <ClimaCard
          min={temp.min}
          max={temp.max}
          dt={dt * 1000}
          main={weather[0].description}
          icon={weather[0].id}
        />
      </Col>
    )}
  </Row>
);

export default ClimaList;