import { Link } from "react-router-dom";


export default function Home (){


    return <>
        <h1>Inicio</h1>
        <p> Test Polyfills </p>
 
        <Link to="/lista">  
            <p> Ir a lista</p>
        </Link>
    </>
}