import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../Redux/Actions";
import "./Card.css";

const Card = ({ image, name, price, id }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClick = async () => {
    console.log(user)
    console.log(id)
    // const obj = {
    //   productsId: [id],
    //   userId: user._id,
    // };

    // dispatch(addToCart(obj));
  };

  return (
    <div className="container">
      <div className="container-card">
        <div className="image" style={{ backgroundImage: `url(${image})` }}>
          {/* <img src={image} alt={image} /> */}
        </div>
        <div className="title">
          <>{name}</>
        </div>
        <div className="price">
          <>${price}</>
        </div>
        <div className="btn">
          {/* <Link> */}
          <button>Ver más</button>
          {/* </Link> */}
        </div>
        <div className="btn">
          {/* <Link> */}
          <button onClick={() => handleClick()}>Agregar al carrito</button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
