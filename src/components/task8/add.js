import { useState } from "react";
import React from "react";

function Counter(){
    const[counter,setCounter] = useState(0);
    var subbtn = document.getElementById("sub");
    var addbtn = document.getElementById("add");
    function sub(){
        if(counter==0){
            subbtn.setAttribute("disabled","");
        }
        else{
            if(addbtn!=null && counter<50){
                addbtn.removeAttribute("disabled");
            }
            setCounter(counter-1);
        }
    }
    function add(){
        if(counter>=50){
            addbtn.setAttribute("disabled","");
        }
        else{
            setCounter(counter+1);
            if(subbtn!=null && counter>=0){
                subbtn.removeAttribute("disabled");
            }
        }
    }
    function reset(){
        setCounter(0);
        subbtn.removeAttribute("disabled");
        addbtn.removeAttribute("disabled");
    }
    return(
        <>
            <div className="text-center">
            <h3 id="counterVal">{counter}</h3>
            <button id="add" onClick={add}>add</button>
            <button id="sub" onClick={sub}>sub</button>
            <button id="reset" onClick={reset}>Reset</button>
            </div>
        </>
    )
}

export default Counter;