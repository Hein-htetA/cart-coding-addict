import "./index.css";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const HeaderBar = () => {
  return (
    <nav className="headerbar-wrapper">
      <div className="headerbar-container">
        <h3 className="shopname">Rangoon Art</h3>
        <div className="icon-container">
          <ShoppingCartIcon fontSize="large" />
          <div className="icon-total-count-container">
            <p className="total-text">5</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderBar;
