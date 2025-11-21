import { Link } from "react-router-dom";
import "../Assets/Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="title">SmileBar</h1>
      <img src="/logo.png" alt="" className="smile-logo" />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">ContactUs</Link>
        <Link to="/cart" className="cart-link">
          🛒Cart ({cartItem.length})
        </Link>
      </div>
    </nav>
  );
}
