import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, removeFromCart } from "../reduxToolkit/slices/cartSlice";


function Cart (props) {
    let cart =useSelector(state=> state.cart);
    let dispatch=useDispatch();
    

    let totalPrice=cart.reduce((acc,ele)=> acc+(ele.price*ele.quantity),0);
    // console.log(cart)
    
    return (
        <>
            {cart.map((e)=> {
                
                    return (    
                        <>
                        <div className="card" key={e.id}>
                            <img src={e.image} loading="lazy" width="300px" alt="photo"/>
                            <h2>{e.title}</h2>
                            <h4>Quantity:{1 && e.quantity}</h4>
                            <p>{e.price*e.quantity}</p>

                            <Link to={`/products/${e.id}`}>Details</Link>
                            <button onClick={()=> {dispatch(removeFromCart(e))}}>remove from cart</button>
                            <p>-------------------------------------------------</p>
                        </div>
                        
                        </>
                    )
            })}
            {cart.length!=0 && <h3>total price : {totalPrice}$</h3>}
            {cart.length!=0 && <button onClick={()=> {dispatch(clearCart())}}>clear cart</button>}
            
        </>
    );
}

export default Cart;