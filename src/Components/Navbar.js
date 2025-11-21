import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="navbar">
<h1 className="title" >SmileBar</h1>
<div className="links">
    <Link to= "/">Home</Link>
    <Link to= "/products">Products</Link>
    <Link to= "/contact">ContactUs</Link>
    <Link to= "/cart" className="cart-link">Cart ({})</Link>
</div>


<h2></h2>
        </nav>
    )
}