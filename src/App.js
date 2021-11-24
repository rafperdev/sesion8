import logo from './logo.svg';
import './App.css';
import Multiple from './Multiple';
import NameForm from './NameForm';
import React, { useState } from 'react';
import { isWaterBoiling } from './utilities/temperature';
import TemperatureField from './TemperatureField';
import { ModalEjemplo } from './componentes/ModalEjemplo';

function App() {
  const [value, setValue] = useState('');
  const [unit, setUnit] = useState('');
  const show = Boolean(unit && value);
  const updateHandler = (newU, newT) => { setValue(newT); setUnit(newU); };
  const formatTemperatureLabel = () => show && ` (${value} °${unit}):`;
  const getAnswer = () => show && (isWaterBoiling(unit, value) ? ' Si' : ' No');
  return (<div>
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h1>¿Está el agua hirviendo?</h1>
          <h2> Temperatura {formatTemperatureLabel()} {getAnswer()} </h2>
          <TemperatureField to="C" value={value} from={unit} onUpdate={updateHandler} />
          <TemperatureField to="F" value={value} from={unit} onUpdate={updateHandler} />
          <ModalEjemplo />
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
