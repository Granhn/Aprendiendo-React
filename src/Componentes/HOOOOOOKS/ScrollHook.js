import React , { useState, useEffect } from "react";


export default function ScrollHooks(){
    
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => { //Es la fase de actualizacion
        const detectarScroll = () => setScrollY(window.pageYOffset);
        window.addEventListener("scroll", detectarScroll);
        //console.log("fase de actualizacion");

        return () =>{window.removeEventListener("scroll",detectarScroll)} //Cuando se desmonte el componente sacamos todos los listeners
    },[scrollY]);
     //Estas son las dependencias del useEffect, este useEffect solo se ejecutara cuando cambien alguna de las dependencias


    //Si quieres trabajar la fase de pontaje deja una lista vacia para las dependencias
    //useEffect(()=> {console.log("False de montaje")}, [ ]);
    

    //la fase de desmontaje se hace usando un return que retorne una funcion (Esto en el use Effect)
    useEffect(() =>{
        return () => console.log("Fase de desmontaje");
    },[]); 
    return(
        <>
            <h3>Scrool Hooks</h3>
            <p>Scroll Y del navegador {scrollY}px</p>
        </>
    )
}