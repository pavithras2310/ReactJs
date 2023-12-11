import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details(){
    const[details,setDetails] = useState([]);
    var {id} = useParams();
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/"+id)
        .then(result=>result.json())
        .then(data=>setDetails(data))
    })
    return(
        <>
            <div className="container-fluid row">
                <div className="col-lg-6">
                    <img className="col-lg-12" src={details.image} />
                </div>
                <div className="col-lg-6">
                    <h4>{details.title}</h4>
                    <p>{details.description}</p>
                </div>
            </div>
        </>
    );
}
export default Details;