import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./Card.css";

const Card = ({ image, name, price, id }) => {

  const history = useHistory()
  const user = useSelector((state) => state.user);
  const getNewDetail = () => {
    console.log("bton");
    history.push(`/detail/${id}`)
    location.reload()
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
