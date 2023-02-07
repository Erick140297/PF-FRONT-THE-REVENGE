import React, { useEffect, useState } from "react";
import { cleanResult, GetAllProducts, setLoader } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import Carousel from "react-bootstrap/Carousel";
import "./home.css";
import Loader from "../Loader/Loader";
import Container from "../ContainerCards/Container";
import ChatBot from "../ChatBot/ChatBot";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"; 
import BackToTop from "../BackToTop/BackToTop";

const Home = () => {
  // hooks
  const allComponents = useSelector((state) => state.allProducts);
  const loading = useSelector((state) => state.loader);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(9);
  const history = useHistory()
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
                src="https://1.bp.blogspot.com/-Cp262X1jC0Y/YCYQfxYihsI/AAAAAAAACuE/sk8Fzx3BuGQf3NAPY17DPCHwr5OjGGmeQCLcBGAsYHQ/w1200-h630-p-k-no-nu/Intel%2BCore%2Bvs%2BAMD%2BRyzen%2Bqu%25C3%25A9%2Bmarca%2Bde%2Bprocesador%2Bescoger%2Bpara%2Bvideojuegos..png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2500} onClick={() => history.push("/detail/63c95c2a5952cea49b59e19c")} >
            
              <img
                className="d-block w-100"
                src="https://www.memorykings.pe/files_contenidos/upload/images/MK030839DESCRIP.jpg"
                alt="First slide"
                
              />
            </Carousel.Item>
            <Carousel.Item interval={2500} onClick={() => history.push("/detail/63dd733ac6b36f47a1cee10b")}>
              <img
                className="d-block w-100"
                src="https://http2.mlstatic.com/D_NQ_NP_876743-MLA46652066326_072021-O.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2500} onClick={() => history.push("/detail/63c974795952cea49b59e1a6")}>
              <img
                className="d-block w-100"
                src="https://s.yimg.com/ny/api/res/1.2/dYOqAft9VaPpELq6jz295Q--/YXBwaWQ9aGlnaGxhbmRlcjtoPTY2Ng--/https://media.zenfs.com/es/tarreo_527/d4794899de4f41586dcd61563ba9e787"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2500} onClick={() => history.push("/detail/63c976cb5952cea49b59e1ac")}>
              <img
                className="d-block w-100"
                src="https://i3.ytimg.com/vi/47-OW0sLj8k/maxresdefault.jpg"
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
