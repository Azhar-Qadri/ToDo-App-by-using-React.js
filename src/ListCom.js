import React, { useState } from "react";


const ListCom =(props)=>{

const [ line, setLine]= useState(false);

    const cutIt =() => {
        setLine(true);
    }
    
    return(

     <div className="todo_style">
    <span onClick={cutIt}>
    <input className="check" type="checkbox" />

    </span>
    <li style={{textDecoration: line ? "line-through" : 'none'}}> {props.text} </li>

    </div>

)}

export default ListCom;