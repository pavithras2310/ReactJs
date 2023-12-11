import React from "react";
import { useEffect,useState } from "react";

function Jsontask() {
    const [product, setProduct] = useState([])
    useEffect(() => {
            fetch("http://localhost:3000/data.json")
            .then(data => data.json())
            .then(putproduct =>{setProduct(putproduct);
            })
    })
    return (
        <>
            <h1>User Details</h1> 
                    <table>
                        <thead>
                            <tr>
                                <td>First name</td>
                                <td>Last Name</td>
                            </tr>
                        </thead>
                    {
                        product.map((value)=>(
                        <>
                            <tbody>
                            <tr>
                                <td>{value.fname}</td>
                                <td>{value.lname}</td>
                            </tr>
                            </tbody>
                        </>
                        ))
                    }
                </table>       
        </>
    );
}
export default Jsontask;