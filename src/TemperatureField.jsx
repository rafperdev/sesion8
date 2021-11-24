import React from 'react';
import { convertTo } from './utilities/temperature';

const TemperatureField = ({ value, from, to, onUpdate }) => {
    const temperature = convertTo(from, to, value);
    const changeHandler = (event) => {
        const value = event.target.value;
        const isNumeric = !isNaN(value);
        if (isNumeric) onUpdate(to, value);
    };
    return (
        <div>
            <label htmlFor={`T-${to}`}>°{to} &emsp;</label>
            <input className="form-control" type="number" name={`T-${to}`} value={temperature} onChange={changeHandler} />
        </div>
    );
};
export default TemperatureField;