import React, { useState } from 'react';

export default function ContadorHooks(props){

    const [contador, setContador] = useState(0);
    const sumar = () => setContador( contador + 1 );
    const restar = () => setContador( contador - 1 );

    return(
        <div>
            <h2>Hooks - useState</h2>
            <p>Contador de : {props.titulo}</p>
            <p>COntador del props {props.contador}</p>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <h3>Valor del contador = {contador}</h3>
        </div>
    );

} 
ContadorHooks.defaultProps = {
    contador : 100,
    titulo: "Clicks"
}