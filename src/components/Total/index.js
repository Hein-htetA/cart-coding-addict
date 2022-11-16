import React from "react";
import "./index.css";

const Total = () => {
  return (
    <footer>
      <hr />
      <div className="footer-container">
        <p>Total</p>
        <span>$3099</span>
      </div>
      <button className="clear-button">Clear Cart</button>
    </footer>
  );
};

export default Total;
