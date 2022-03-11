import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const paises = ['México', 'Estados Unidos', 'Argentina', 'Peru']

export default function Lista (){

    const [listaPaises, setListaPaises] = useState()

    useEffect (()=>{

        if (paises){
            setListaPaises(paises)
        } 
    }, [])

    const ComponentList = () => listaPaises 
        ? listaPaises.map((element, index)=>{ 
            return  <div key={index}> 
                <li>{element}</li>
            </div> 
          }) 
        : <div> No hay Datos</div>  

    return <>
        <h1>Lista De ejemplo</h1> 

        <ComponentList/> 

        <Link to="/">  
            <p> Volver a Inicio</p>
        </Link> 
    </>
}