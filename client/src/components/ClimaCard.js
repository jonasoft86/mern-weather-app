import React from 'react';
import * as weatherIcons from '../icons/icons.json';

const DIAS = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo"
];

const ClimaCard = ({ dt, min, max, main, icon }) => {
  const date = new Date(dt);
  const iconPrefix = 'wi wi-';
  const iconImg = iconPrefix + weatherIcons['day'][icon].icon;

  return (
  <div className="card opacity h-100">
    <div className="card-body text-white">
      <h3 className="text-center">{ DIAS[date.getDay()] }</h3>
      <p className="text-center mt-3">
        <span className={iconImg}></span>
      </p>
      <h3 className="text-center">{ main }</h3>
      <p className="text-center mt-3">
        <p>{date.getDate()+1}/{date.getMonth() + 1}</p>
        <p>Minima: {min}</p>
        <p>Maxima: {max}</p>
      </p>

      <h5 className="text-center text-capitalize">{}</h5>
    </div>
  </div>
  )
};

export default ClimaCard;