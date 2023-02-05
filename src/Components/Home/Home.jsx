import React, { useEffect, useState } from "react";
import { cleanResult, GetAllProducts, setLoader } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Carousel from "react-bootstrap/Carousel";
import "./home.css";
import Loader from "../Loader/Loader";
import Container from "../ContainerCards/Container";
import ChatBot from "../ChatBot/ChatBot";
import BackToTop from "../BackToTop/BackToTop";

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
                src="https://www.memorykings.pe/files_contenidos/upload/images/MK030839DESCRIP.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
                className="d-block w-100"
                src="https://web.impakt.com.pl/opisy/gnufvu40hri23tg4c10ilji2.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
              <img
                className="d-block w-100"
                src="https://i0.wp.com/overcluster.com/wp-content/uploads/2019/06/AMD-Ryzen-9-E3-Overcluster.jpg?fit=1280%2C720&ssl=1"
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
          </div>
          <div className="btn boton">
            <button onClick={() => loadMore()}>
              {amount <= allComponents.length
                ? "cargar más..."
                : "No hay más (⩾﹏⩽)"}
            </button>
          </div>
          <BackToTop>up</BackToTop>
        </div>
      )}
    </>
  );
};

export default Home;