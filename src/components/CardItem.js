import React from "react";


const Card=({product})=>{
    return(
    <div className="card" style={{width:"18rem"}}>
    <img
      src={product.URL}
      className="card-img-top"
      alt="..."
    />
    <div className="card-body">
   <h5 className="card-title">{product.cardTitle}</h5>
      <p className="card-text">
       {product.cardText}
      </p>
    <button className="btn btn-primary">{product.buttonText}</button>
    </div>
  </div>
    )
}
export default Card;