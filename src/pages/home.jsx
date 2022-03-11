import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import LogArea from "../components/logArea"; 
 
export default function Home (){

    const [textList, setTextList] = useState([])  

    useEffect (()=>{   
 
        const allText = textList.slice()
        allText.push('En pagina :Inicio') 
        setTextList (allText) 

    }, [])

    return <> 
        <h1>Inicio</h1>
        <p> Test Polyfills </p> 

        <Link to="/lista">  
            <p> Ir a lista</p>
        </Link>

        <button onClick={()=>{  
            const allText = textList.slice()
            allText.push('Example Log') 
            setTextList (allText) 
        }}>ADD MESAJE</button>

        <LogArea textList={textList}/>
    </>
}