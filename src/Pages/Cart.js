import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../bootstrap/dist/css/bootstrap.min.css";
import { grey } from "@mui/material/colors";
import { colors } from "@mui/material";
const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart 🛒</h2>
      {cartItems.lenght === 0 ? (
        <p>Your cart is empty .</p>
      ) : (
        <>
          <div style={{ display: "flex", flexWrap: "wrap ", gap: "15px" }}>
            {cartItems.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px sold ",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "250px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100%", borderRadius: "10px" }}
                />
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="btn btn-outline-danger"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <hr style={{ margin: "20px 0 " }} />
          <h3>Total : ${total}</h3>
          <button
            onClick={clearCart}
            style={{
              background: "grey",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            clear Cart
          </button>
        </>
      )}
    </div>
  );
};
export default Cart;
