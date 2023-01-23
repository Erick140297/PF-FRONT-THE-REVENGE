import React from "react";
import styles from "./Cards.css";
import { useDispatch } from "react-redux";
import { getProductsByCategory } from "../../../Redux/Actions";
import { useHistory } from "react-router-dom"

export default function Cards({ category, image }) {
  // const cat = category
  const dispatch = useDispatch();

  const history = useHistory()

  const handleClick = (category) => {
    dispatch(getProductsByCategory(category));
    history.push("/result")
  };

  return (
    <div className="Cards" onClick={() => handleClick(category)}>
      <div className="container-3">
        <div className="imageCards">
          <img src={image} />
        </div>
        <div className="category">
          <h3>{category}</h3>
        </div>
      </div>
    </div>
  );
}
