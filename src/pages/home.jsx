import { useEffect } from "react";
import { Link } from "react-router-dom";
 
export default function Home (){
 
    useEffect (async ()=>{ 
        console.log('En pagina :Inicio')
    }, [])

    return <>
        <h1>Inicio</h1>
        <p> Test Polyfills </p>
 
        <Link to="/lista">  
            <p> Ir a lista</p>
        </Link>
    </>
}