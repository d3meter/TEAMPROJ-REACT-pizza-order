import React, { useState } from "react";
import "./Pizza.css";
import basketImg from "./../img_pub/basket.png";

function Pizza({ name, ingredients, price, onChange }) {
  const [piece, setPiece] = useState(1);

  const min = 1;
  const max = 100;

  const handleChange = (event) => {
    const value = Math.max(min, Math.min(max, Number(event.target.value)));
    setPiece(value);
  };

  const handlePickData = () => {
    onChange(name, price, piece);
  };

  return (
    <div className={"Pizza"}>
      <div className="ordering">
        <label htmlFor="amount">Amount:</label>
        <input
          name="amount"
          type="number"
          min="1"
          value={piece}
          onChange={handleChange}
        />
        <button
          className="add-order"
          onClick={() => {
            handlePickData();
          }}
        >
          <img src={basketImg} alt="basket_picture" className="basketBtn" />
        </button>
      </div>
      <hr />
      <h2>{name}</h2>
      <h5>{price} $</h5>
      <div className="pizza-pics">
        <img
          key={name}
          src={require(`../data/img/${name}.webp`)}
          alt="pizza"
          className="pizzaPics"
        />
      </div>
      <h3>{ingredients.join(" \u2022 ")}</h3>
    </div>
  );
}

export default Pizza;
