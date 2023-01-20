import React, { useEffect, useState } from "react";
import { GetAllProducts } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import "./home.css";
import Carouse from "../carrousel/Carousel";

const Home = () => {
  const Dispatch = useDispatch();
  const allComponents = useSelector((state) => state.allProducts);

  useEffect(() => {
    Dispatch(GetAllProducts());
  }, []);

  return (
    <div>
        <Carouse/>
      <div className="cardsContaier">
      
        {allComponents?.map((el, index) => {
          return (
            <Card
              name={el.name}
              image={el.image ? el.image.secure_url : ""}
              price={el.price}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GetAllProducts } from "../../Redux/Actions";

// export default function Home(){
//     const Dispatch = useDispatch()
//     const allComponents = useSelector((state)=>state.allProducts)

//     useEffect(()=>{
//         Dispatch(GetAllProducts())
//     })
//     return(

//         <h1>Home</h1>
//     //     {allProducts?.map(el=>)}
//     // <Card
//     // />
//     )
// }
