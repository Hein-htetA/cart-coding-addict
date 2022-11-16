import React from "react";
import { useAppContext } from "../../Context";
import "./index.css";

const Total = () => {
  const { clearCart, totalAmount } = useAppContext();
  return (
    <footer>
      <hr />
      <div className="footer-container">
        <p>Total</p>
        <span>{totalAmount}</span>
      </div>
      <button className="clear-button" onClick={clearCart}>
        Clear Cart
      </button>
    </footer>
  );
};

export default Total;
