import React, { useEffect, useState } from 'react';


function Reloj(){
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    useEffect(() =>{
        let temporizador = setInterval(()=>{ setHora(new Date().toLocaleTimeString())} ,1000); 
        return () => {
            //console.log("Desmontando componente");
            clearInterval(temporizador);
        }
        
    },[]);
    return <h3>{hora}</h3>;
}

export default function RelojHooks(){
    
    const [visible, setVisible] = useState(false); 

    // useEffect(() => {
    //     let temporizador;
    //     if(visible){
    //         temporizador = setInterval(()=>{
    //             setHora(new Date().toLocaleTimeString());
    //         },1000);
    //     }
    //     else{
    //         clearInterval(temporizador);
    //         return() => {
    //             console.log("Fase de desmontaje")
    //         }
    //     }


    // }, [visible]);

    // const iniciar =() =>{
    //     setVisible(true);
    // }
    // const detener = () => {
    //     setVisible(false);
    // }
    // const ticTac = (valor) =>{
    //     setVisible(valor);

    // }
    return (
        <>
            <h2>Reloj con Hooks!!</h2>
            {visible && <Reloj/>}
            <button onClick={()=> setVisible(true)}>Iniciar</button>
            <button onClick={() => setVisible(false)}>Detener</button>
        </>
    )
}