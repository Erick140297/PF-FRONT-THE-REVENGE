import React from "react";
import { Link } from "react-router-dom";
import './Card.css'


const Card = ({image,name,price}) => {
    return(
        <div className="container">

        <div className="container-card">
            <div className="image" style={{backgroundImage:`url(${image})`}}>
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
        </div>
        </div>
    )
}

export default Card;