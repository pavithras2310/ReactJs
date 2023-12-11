import React from "react";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import StarRatings from "react-star-ratings";

export function ProductInCards() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=5")
            .then(data => data.json())
            .then(putproduct =>{setProduct(putproduct);
            })
    })
    return (
        <>
            <h1>products</h1> 
            <CSVLink className="text-center" data={product}>Download table</CSVLink><br/><br/>
                    <table>
                        <thead>
                            <tr>
                                <td>S.No</td>
                                <td>Product Image</td>
                                <td>Title</td>
                                <td>Description</td>
                                <td>Rating</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                    {
                        product.map((value,index)=>(
                        <>
                            <tbody>
                            <tr>
                                <td>{value.id}</td>
                                <td>{value.image}</td>
                                <td>{value.title}</td>
                                <td>{value.description}</td>
                                <td><StarRatings
                                        rating={value.rating.rate}
                                        starRatedColor="gold"
                                        numberOfStars={5}
                                        starDimension="15px"
                                        starSpacing="1px"
                                    /></td>
                                <Link to={`/details/${value.id}`} className="btn btn-primary"><td>view</td></Link>
                            </tr>
                            </tbody>
                        </>
                        ))
                    }
                </table>       
        </>
    );
}
export default ProductInCards;