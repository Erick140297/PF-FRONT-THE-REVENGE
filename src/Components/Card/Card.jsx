import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cleanDetail, getDetail, setLoader } from "../../Redux/Actions";
import Loader from "../Loader/Loader";
import "./Card.css";

const Card = ({ image, name, price, id }) => {

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loader);

  const getNewDetail = () => {
    dispatch(cleanDetail())
    dispatch(getDetail(id))
  }

  useEffect(() => {
    return () => {
      dispatch(setLoader());
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
    )}
    </>
  );
};

export default Card;
