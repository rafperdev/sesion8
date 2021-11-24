import React, { useState } from 'react';

const NameForm = () => {
    const MIN = 2;
    const MAX = 50;
    const GROUP = `[a-zñáéíóúüA-ZÁÉÍÓÚÜÑ]{${MIN},${MAX}}`;
    const VALIDATION = new RegExp(`^(${GROUP})( ${GROUP})*$`);
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const changeHandler = (event) => {
        setValue(event.target.value);

        const error = CUSTOM_VALIDATION(event.target.value);
        setError(error);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const isValid = VALIDATION.test(value);
        console.log({ VALIDATION, isValid });
        if (isValid) {
            alert('Nombre: ' + value);
            setError('');
        } else setError('Nombre no válido');
    };
    const CUSTOM_VALIDATION = (input) => {
        const matchesRegex = VALIDATION.test(input.trim());
        if (input.length < MIN) return `Se necesitan mínimo ${MIN} caracteres`;
        else if (input.length > MAX * 4) return `Se necesitan aceptan  máximo ${MAX * 4} caracteres`;
        else if (!matchesRegex) return 'Formato inválido';
        else return '';
    };
    return (
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor="name"> Nombre: </label>
                <input type="text" name="name" value={value} onChange={changeHandler} />
                <input type="submit" value="Enviar" />
            </form>
            {Boolean(error) && <p>{error}</p>}
        </>
    );
};
export default NameForm;