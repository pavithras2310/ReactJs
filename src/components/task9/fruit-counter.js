import { useState } from "react";
import React from "react";
import '../task9/fruit-counter.css'

function FruitCounter(){
    const[mangoCounter,setMangoCounter] = useState(0);
    const[bananaCounter,setBananaCounter] = useState(0);
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <h3 className="text-center">Bob ate {mangoCounter} mangoes {bananaCounter} bananas</h3>
                    <div className="col-lg-4 mx-auto">
                        <img className="col-lg-4 mango" src="https://buysellgraphic.com/images/graphic_preview/large/mango_fruit_icon_sliced_cut_sketch_classic_design_62390.jpg" alt="mango" /><br/><br/>
                        <button className="btn btn-primary" id="addmango" onClick={()=>{setMangoCounter(mangoCounter+1)}}>Eat Mangoes</button>
                    </div>
                    <div className="col-lg-4 mx-auto">
                        <img className="col-lg-4 banana" src="https://www.shutterstock.com/image-vector/banana-healthy-fruit-vector-illustration-260nw-1547888666.jpg" alt="mango" /><br/><br/>
                        <button className="btn btn-primary" id="addbanana" onClick={()=>{setBananaCounter(bananaCounter+1)}}>Eat Bananas</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default FruitCounter;