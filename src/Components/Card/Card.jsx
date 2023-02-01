import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cleanDetail, getDetail } from "../../Redux/Actions";
import "./Card.css";

const Card = ({ image, name, price, id }) => {

  const details = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  const getNewDetail = () => {
    dispatch(cleanDetail())
    dispatch(getDetail(id))
  }

  return (
    <Link
      to={"/detail/"+ id }
      style={{ textDecoration: "none", color: "black" }}
      onClick={getNewDetail}
    >
      <div className="container-2">
        <div className="container-card">
          <div className="image" style={{ backgroundImage: `url(${image})` }}>
          </div>
          <div className="title1">
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
