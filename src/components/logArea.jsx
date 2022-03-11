import { useEffect, useState } from "react" 
  
export default function LogArea ({textList}){

    const LogStyle = {
        background: '#686868',
        padding: '1px 15px',
        margin: '10px 0'
    }

    const RowStyle = { 
        color: '#fff'
    }
  
    return <div style={LogStyle}>  
          {textList.map((e, i)=>{
              return <p key={i} style={RowStyle}> {'# ' + e} </p>
          })} 
    </div>
}