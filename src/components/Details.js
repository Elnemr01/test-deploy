import { useEffect, useState } from "react";
import { useParams } from "react-router";


function Details (props) {
    let {id}=useParams();
    let [product,setProduct] =useState([]);
    // console.log(id);

    useEffect(()=> {
        fetch(`https://fakestoreapi.com/products/${id}`).then((res)=> {return res.json()})
        .then((data)=> {
            setProduct(data);
        })
    },[]);
    // console.log(product);

    return (
        <>
        {/* <h2>details</h2> */}
            <div className="card">
                        <img src={product.image} loading="lazy" width="300px" alt="photo"/>
                        <h2>{product.title}</h2>
                        <p>{product.price}</p>
                    </div>
        </>
    );
}

export default Details;