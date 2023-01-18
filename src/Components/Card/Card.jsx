import React from "react";
import { Link } from "react-router-dom";
import './Card.css'
export function Card({image,name,price}){
    return(

        <div className="container-card">
            <div className="image">
                <img src="https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31776_Memoria_GeiL_DDR4_16GB_3000MHz_Super_Luce_RGB_Black_646b61f7-grn.jpg" alt="imagen" />
            </div>
            <div className="title">
                <p>Memoria GeiL DDR4 16GB 3000MHz Super Luce RGB Black </p>
            </div>
            <div className="price">
                <p>$31653</p>
            </div>
            <div className="btn">
                {/* <Link> */}
                <button>Ver mas</button>
                {/* </Link> */}
            </div>

        </div>
    )
}