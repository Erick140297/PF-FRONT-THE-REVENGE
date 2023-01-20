import React, { useEffect, useState } from "react";
import { GetAllProducts } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Carousel from "react-bootstrap/Carousel";
import "./home.css";

const Home = () => {
  const Dispatch = useDispatch();
  const allComponents = useSelector((state) => state.allProducts);

  useEffect(() => {
    Dispatch(GetAllProducts());
  }, []);

  return (
    <div>
      {/* <div className="cardsContaier"> */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.grupoxfone.com.br/wp-content/uploads/2020/12/apple-products.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.computerlounge.co.nz/Data/Media/Images/Brand/HyperX/hyperx-brand-banner.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0566/0989/8694/files/JBL-Headphone-Series-Category-Banner.jpg?v=1635476150"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://gameone.ph/media/wysiwyg/GameOne-Inner-Banner-Redragon.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://dlcdnwebimgs.asus.com/gain/77614B08-0FD4-41FB-9517-ADB95C1F4546/fwebp"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

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
