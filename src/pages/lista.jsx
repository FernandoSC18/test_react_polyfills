import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const endpointCoutries = 'https://restcountries.com/v3.1/all' 

export default function Lista (){

    const [listaPaises, setListaPaises] = useState()

    useEffect (async ()=>{
        console.log('En pagina :Lista')
  
        const result = await methodGet(endpointCoutries, null, null) 

        if (result){
            setListaPaises(result)
        } 
    }, [])

    
    const methodGet = (url = '', headers = {}) => fetch(url, {
        method: 'GET',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json', 
        ...headers 
        }
    }).then((response) => response.json())

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
        <ComponentList/> 

    </>
}