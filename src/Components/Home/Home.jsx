import React, { useEffect, useState } from "react";
import { GetAllProducts, setLoader } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Carousel from "react-bootstrap/Carousel";
import "./home.css";
import Loader from "../Loader/Loader";
import Container from "../ContainerCards/Container";
import { Link } from "react-router-dom";

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
          <Carousel>
            <Carousel.Item interval={2500}>
              <img
                className="d-block w-100"
                src="https://www.grupoxfone.com.br/wp-content/uploads/2020/12/apple-products.jpg"
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
                src="https://cdn.shopify.com/s/files/1/0566/0989/8694/files/JBL-Headphone-Series-Category-Banner.jpg?v=1635476150"
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
