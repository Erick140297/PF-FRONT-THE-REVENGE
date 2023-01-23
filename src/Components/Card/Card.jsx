import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ image, name, price, id }) => {
  const user = useSelector((state) => state.user);



  return (
    <Link
      to={"/detail/"+ id }
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="container-2">
        <div className="container-card">
          <div className="image" style={{ backgroundImage: `url(${image})` }}>
          </div>
          <div className="title">
            <>{name}</>
          </div>
          <div className="price">
            <>${price}</>
          </div>
          <div className="btn">
            <button>Ver más</button>
          </div>
          <div className="btn">
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
