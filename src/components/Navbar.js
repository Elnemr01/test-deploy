import { Link } from "react-router";
import { useSelector } from "react-redux";


function Navbar (props) {
    let cart =useSelector(state => state.cart);
    // console.log(cart);
    return (
        <>
            <div className="links">
                <Link to="/">products</Link>
                <Link to="/Cart">Cart-{cart.length}</Link>
            </div>
        </>
    );
}

export default Navbar;