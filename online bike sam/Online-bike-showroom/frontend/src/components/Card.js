import React, { useState } from "react";
import { useDispatchCart, useCart } from "./contextReducer";

const Card = (props) => {
  let dispatch = useDispatchCart();
  let data = useCart();
  console.log(data);

  let colors = props.colors;
  let colorOptions = Object.keys(colors);

  const [color, setColor] = useState(1);
  const [qty, setQty] = useState("");

  const handleAddToCart = async () => {
    // ... your existing logic for adding to cart
  };

  return (
    <div className="card mt-3" style={{ maxWidth: "18rem" }}>
      <img
        src={props.imageSrc}
        className="card-img-top"
        alt="Bike"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.bikeName}</h5>
        <div className="container">
          <select
            className="form-select m-2"
            onChange={(e) => setQty(e.target.value)}
          >
            {Array.from(Array(6), (e, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <select
            className="form-select m-2"
            onChange={(e) => setColor(e.target.value)}
          >
            {colorOptions.map((data) => (
              <option key={data} value={data}>
                {data}
              </option>
            ))}
          </select>

          <div className="d-inline h-100 fs-5">{props.amount}</div>
        </div>
        <hr />
        <button
          className="btn btn-success w-100"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
