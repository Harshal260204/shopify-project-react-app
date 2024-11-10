import React from "react";

export default function Card(props) {
  return (
    <div
      className="card border rounded-0 ms-3 mt-3  col-3 col-lg-3 col-md-4 col-sm-6"
      style={{ width: "19rem" }}
    >
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h6>Beauty</h6>
        <a href="#" className="text-decoration-none">
          <h5>{props.title}</h5>
        </a>
        <span className="text-warning fs-4">{props.rating}</span>
        <span>
          <h4 className="text-primary">{props.price}</h4>
        </span>
        <span>
          <strike>{props.oldprice}</strike>
        </span>
        <span>{props.percentage}</span>
        <a href="#" className="btn btn-primary">
          Add To Cart
        </a>
      </div>
    </div>
  );
}
