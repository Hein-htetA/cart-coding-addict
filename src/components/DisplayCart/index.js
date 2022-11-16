import React from "react";
import items from "../../data";
import "./index.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DisplayCart = () => {
  console.log(items);
  return (
    <section>
      <h2>Cart</h2>
      <article>
        {items.map((item) => {
          const { id, title, price, img } = item;
          return (
            <div className="cart-container" key={id}>
              <img src={img} alt="product" height={80} />
              <div className="item-detail-container">
                <h4 className="product-title">{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button className="remove-btn">remove</button>
              </div>
              <div className="button-group">
                <button>
                  <KeyboardArrowUpIcon />
                </button>
                <p>3</p>
                <button>
                  <KeyboardArrowDownIcon />
                </button>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default DisplayCart;
