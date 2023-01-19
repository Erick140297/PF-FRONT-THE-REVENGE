import React from "react";
import { Link } from "react-router-dom";
import './Card.css'


const Card = ({image,name,price}) => {
    return(
        <div className="container">

        <div className="container-card">
            <div className="image">
                <img src={image} alt={image} />
            </div>
            <div className="title">
                <h4>{name}</h4>
            </div>
            <div className="price">
                <p>${price}</p>
            </div>
            <div className="btn">
                {/* <Link> */}
                <button>Ver mas</button>
                {/* </Link> */}
            </div>
        </div>
        </div>
    )
}

export default Card;