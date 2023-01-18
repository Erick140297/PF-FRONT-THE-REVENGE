import React from "react";
import { Link } from "react-router-dom";
import './Card.css'





export function Card({image,name,price}){
    return(

        <div className="container-card">
            <div className="image">
                <img src={image} alt={image} />
            </div>
            <div className="title">
                <p>{name}</p>
            </div>
            <div className="price">
                <p>{price}</p>
            </div>
            <div className="btn">
                {/* <Link> */}
                <button>Ver mas</button>
                {/* </Link> */}
            </div>

        </div>
    )
}