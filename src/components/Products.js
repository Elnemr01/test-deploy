import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../reduxToolkit/slices/productSlics";
import { Link } from "react-router";
import { addToCart } from "../reduxToolkit/slices/cartSlice";

function Products (props) {
    let state =useSelector(state => state.products);
    // console.log(state);
    let dispatch=useDispatch();
    useEffect(()=> {
        dispatch(fetchProducts());
    },[])
    return (
        <>
            {state.map((e)=> {
                return (
                    <>
                    <div className="card" key={e.id}>
                        <img src={e.image} loading="lazy" width="300px" alt="check your wifi"/>
                        <h2>{e.title}</h2>
                        <p>{e.price}</p>
                        <Link to={`/products/${e.id}`}>Details</Link>
                        <button onClick={()=> {dispatch(addToCart(e))}}>Add to cart</button>
                        <p>-------------------------------------------------</p>
                    </div>
                    
                    </>
                )
            })}
        </>
    );
}

export default Products;