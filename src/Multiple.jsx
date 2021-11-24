import React from 'react';
const Mensaje = ({ mensaje }) => <p>{mensaje}</p>;
const Multiple = () => {
    const lista = [
        { id: 1, msg: 'a' },
        { id: 2, msg: 'b' },
        { id: 3, msg: 'c' },
    ];
    const mostrarLista = listado =>
        listado.map(elemento => (
            <Mensaje key={elemento.id} mensaje={elemento.msg} />
        ));
    return <>{mostrarLista(lista)}</>;
};
export default Multiple;