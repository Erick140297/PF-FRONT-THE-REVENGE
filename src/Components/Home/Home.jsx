import React, { useEffect, useState } from "react";
import { cleanResult, GetAllProducts, setLoader } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Carousel from "react-bootstrap/Carousel";
import "./home.css";
import Loader from "../Loader/Loader";
import Container from "../ContainerCards/Container";
import ChatBot from "../ChatBot/ChatBot";


const Home = () => {
  // hooks
  const allComponents = useSelector((state) => state.allProducts);
  const loading = useSelector((state) => state.loader);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(9);

  //cantidad de cards renderizadas
  const amountInPage = allComponents.slice(0, amount);

  //Handler buttons
  const loadMore = () => {
    setAmount(amount + 3);
  };

  //más hooks
  useEffect(() => {
    dispatch(GetAllProducts());
    dispatch(cleanResult())
    return () => {
      dispatch(setLoader());
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
        <ChatBot /> 
          <Carousel>
            <Carousel.Item interval={2500}>
              <img
                className="d-block w-100"
                src="https://beetech.com.np/image/cache/catalog/1projector/durable-1900x500.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
                className="d-block w-100"
                src="https://www.computerlounge.co.nz/Data/Media/Images/Brand/HyperX/hyperx-brand-banner.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
                className="d-block w-100"
                src="https://beetech.com.np/image/cache/catalog/Drone/h410m-b-pro-connectivity-1900x500.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
                className="d-block w-100"
                src="https://gameone.ph/media/wysiwyg/GameOne-Inner-Banner-Redragon.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
                className="d-block w-100"
                src="https://dlcdnwebimgs.asus.com/gain/77614B08-0FD4-41FB-9517-ADB95C1F4546/fwebp"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <Container />

          <div className="cardsContaier">
            {amountInPage?.map((el, index) => {
              return (
                <Card
                  name={el.name}
                  image={el.image ? el.image.secure_url : ""}
                  price={el.price}
                  id={el._id}
                  key={index}
                />
              );
            })}
            {/* {allComponents?.map((el, index) => {
              return (
                <Card
                  name={el.name}
                  image={el.image ? el.image.secure_url : ""}
                  price={el.price}
                  id={el._id}
                  key={index}
                />
              );
            })} */}
          </div>
          <div className="btn boton">
            <button onClick={() => loadMore()}>
              {amount <= allComponents.length
                ? "cargar más..."
                : "No hay más (⩾﹏⩽)"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

// loading ? (
