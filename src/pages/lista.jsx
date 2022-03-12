import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"
import LogArea from "../components/logArea"; 
import {fetch as fetchPolyfill} from 'whatwg-fetch'

const endpointCoutries = 'https://restcountries.com/v3.1/all' 

export default function Lista (){ 

    const [listaPaises, setListaPaises] = useState()
    const [textList, setTextList] = useState([])  

    useEffect (async ()=>{ 

        console.log('useEffect Lista')
        const allText = textList.slice() 
 
        allText.push('En pagina :Lista') 
        setTextList (allText) 
   
        allText.push('Inicia Peticion Fetch') 
        setTextList (allText) 
        const result = await methodGetOld(endpointCoutries, null, null) 
        console.log(`result`, result);
 
        allText.push('Termina Peticion Fetch') 
        setTextList (allText) 

        if (result){
            setListaPaises(result)
        } 
    }, [])

    
    const methodGet = (url = '', headers = {}) => fetchPolyfill(url, {
        method: 'GET',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json', 
        ...headers 
        }
    }).then((response) => response.json())

    const methodGetOld = async (url = '', headers = {}) => new Promise((resolver, rechazar) => { 
 
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url, [true, null, null]) 
            xhr.send( )

            xhr.onload = function() {
                console.log(`onload`);
                console.log(`Cargado: ${xhr.status} ${xhr.response}`);
                resolver(xhr.response); 
            };
              
            xhr.onerror = function() { // solo se activa si la solicitud no se puede realizar
                console.log(`Error de red`);
                rechazar()
            };
            console.log(`FINSIH PROMISE`);
            
        }).then((response) => JSON.parse(response) )
    

    const ComponentList = () => listaPaises 
        ? listaPaises.map((element, index)=>{ 

            console.log('length', listaPaises.length)

            return  <div key={index}> 
                <li>{element.name.common}</li>
            </div> 
          }) 
        : <div> Cargando Datos </div>  

    return <>
        <h1>Lista De ejemplo</h1> 

        <Link to="/">  
            <p> Volver a Inicio</p>
        </Link> 
        
        <button onClick={()=>{  
            const allText = textList.slice()
            allText.push('Example Log') 
            setTextList (allText) 
        }}>ADD MESAJE</button>

        <LogArea textList={textList}/>

        <ComponentList/> 

    </>
}