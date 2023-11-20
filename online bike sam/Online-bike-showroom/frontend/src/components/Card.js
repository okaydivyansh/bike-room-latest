import React, { useState } from "react";
import { useDispatchCart, useCart } from "./contextReducer";
const Card = (props) => {

  let dispatch= useDispatchCart();
  let data=useCart();
  let colors=props.colors;
  let colorOptions=Object.keys(colors);
  let bikeItem=props.bikes;
  const [color, setColor]=useState(1)
  const [qty, setQty]=useState("")

 const handleAddToCart = async () => {
  let bikess = []
  for (const item of data) {
    if (item.id === props.bikeItem._id) {
      bikess = item;
      break;
    }
  }

  if (bikess !== []) {
    if (bikess.color === color) {
      await dispatch({ type: "UPDATE", id: props.bikeItem._id, price: props.amount, qty: qty });
      return;
    } else if (bikess.color !== color) {
      await dispatch({ type: "ADD", id: props.bikeItem._id, name: props.bikeItem.name, price: finalPrice, qty: qty, colors: color, img: props.ImgSrc });
      console.log("Size different so simply ADD one more to the list");
      return;
    }
    return;
  }

  await dispatch({ type: "ADD", id: props.bikeItem._id, name: props.bikeItem.name, price: props.bikeItem.price, color: color, qty: qty });
  console.log(data);
};
  
  let finalPrice= qty*parseInt(props.amount);
  return (
    <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
      <img
        src={props.imageSrc}
        className="card-img-top"
        alt="Alt Text"
        style={{height: "120 px", objectFit:"fill"}}
      />
      <div className="card-body">
        <h5 className="card-title">{props.bikeName}</h5>
        <div className="container w-100">
          <select className="m-2 h-100 bg-success rounded" onChange={(e)=>setQty(e.target.value)}>
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          
          <select className="m-2 h-100 bg-success rounded" onChange={(e)=>setColor(e.target.value)}>
            {colorOptions.map((data)=>{
              return <option key={data} value={data}>{data}</option>
            })}
           
            </select> 
          <div className="d-inline h-100 fs-5">{props.amount}</div>
        </div>
        <hr></hr>
        <button className={'btn btn-success justify-centre ms-2'}onClick={handleAddToCart}>Add to Cart</button>

      </div>
    </div>
  );
};

export default Card;
