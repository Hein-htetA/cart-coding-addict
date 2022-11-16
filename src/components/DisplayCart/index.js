import React from "react";
import "./index.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useAppContext } from "../../Context";
import EmptyCart from "../EmptyCart";

const DisplayCart = () => {
  const { items, increaseDecreaseCount, removeItem } = useAppContext();
  if (items.length === 0) {
    return <EmptyCart />;
  }
  return (
    <section>
      <h2>Cart</h2>
      <article>
        {items.map((item) => {
          const { id, title, price, img, count } = item;
          return (
            <div className="cart-container" key={id}>
              <img src={img} alt="product" height={80} />
              <div className="item-detail-container">
                <h4 className="product-title">{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button className="remove-btn" onClick={() => removeItem(id)}>
                  remove
                </button>
              </div>
              <div className="button-group">
                <button onClick={() => increaseDecreaseCount(id, "inc")}>
                  <KeyboardArrowUpIcon />
                </button>
                <p>{count}</p>
                <button onClick={() => increaseDecreaseCount(id, "dec")}>
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
