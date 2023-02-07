import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, setLoader, addToCart, getCart, GetAllProducts} from "../../Redux/Actions";
import Loader from "../Loader/Loader";
import "./Detail.css";
import { Rating } from "@material-ui/lab";
import { useAuth0 } from "@auth0/auth0-react";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { FaCommentDots, FaUserAstronaut, FaRegComments, FaRocket } from 'react-icons/fa'
import { MdThumbDown, MdThumbUp } from "react-icons/md";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import ChatBot from "../ChatBot/ChatBot";


const Detail = (props) => {
  const { user, isAuthenticated } = useAuth0();
  const history =  useHistory()
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const details = useSelector((state) => state.detail);
  const loading = useSelector((state) => state.loader);
  const userId = useSelector((state) => state.user);
  const allComponents = useSelector((state) => state.allProducts);

  const handleClick = () => {
    const obj = {
      productId: id,
      userId: userId._id,
    };
    if (isAuthenticated) {
      dispatch(addToCart(obj));
      dispatch(getCart(user.email));
      dispatch(getDetail(id))
      toast.success("Producto agregado al carrito")
      history.push(`/checkProduct/${id}`)
    } else {
      toast.error("Por favor inicia sesión");
    }
  };

  const promedio = (arr) => {
    let suma = 0;
    for (let x = 0; x < arr.length; x++) {
      suma += parseInt(arr[x]);
    }
    const resultado = suma / details.rating.length;
    return resultado;
  };

  const contador1 = 0
  const contador2 = 0

  const cont1 = () => {
    contador1 = contador1++
  }


  useEffect(() => {
    dispatch(GetAllProducts())
    dispatch(getDetail(id));
    return () => {
      dispatch(setLoader());
    };
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0,0)
  })
  
  
  return (
    <>
      {loading ? (
        <Loader />
      ) : Object.keys(details).length>1  ? (
        <div className="detail-box mb-4">
          <ChatBot /> 
          <section className="container sproduct my-5 pt-5">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-12">
                <div className="image-container">
        { details?.subCategory==="teclados"?<img
                    className="image-detail-teclados"
                    src={details.image?.secure_url}
                    alt=""
                  />:
                  <img
                    className="image-detail"
                    src={details.image?.secure_url}
                    alt=""
                  />
      }
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="name-brand-price">
                  <h2>{details?.name}</h2>
                  <h3>
                    Marca:{" "}
                    {details?.brand.charAt(0).toUpperCase() +
                      details?.brand.slice(1)}
                  </h3>
                  <h2>$ {details?.price}</h2>
                </div>
                <br />
                <div className="stock">
                  {details?.stock > 10 ? (
                    <h3 className="stock-disponible fs-5">
                      Stock disponible ({details?.stock})
                    </h3>
                  ) : (
                    <h3 className="fs-5">Poco stock disponible ({details?.stock})</h3>
                  )}
                </div>
                <hr className="text-muted" />
                <div className="rating mt-2">
                  {details?.rating.length > 1 ? (
                    <div className="mb-3">
                      <h4 className="h-rating fs-6 text-muted">Rating del producto</h4>
                      <Rating
                        name="raintg"
                        className="fs-2"
                        defaultValue={
                          details?.rating.length ? (
                            details.rating.length
                          ) : (
                            <h3 className="fs-6 text-muted">Sin rating</h3>
                          )
                        }
                        precision={0.1}
                        readOnly
                      />
                    </div>
                  ) : (
                    <h3 className="fs-6 text-muted mb-3">Sin rating aún</h3>
                  )}
                </div>
                {/* <Link to={`/CheckProduct/${id}`}>
                  <button type="button" className="btn btn-danger">Añadir al carrito</button>
                </Link> */}
                <button
                  type="button"
                  className="btn btn-danger shadow-md"
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Añadir al carrito
                </button>
                <div className="product-description-container">
                  <h3 className="text-detai mt-5 mb-5 text-muted">
                    Descripción:
                    <p className="p-detail mt-1">{details?.description}</p>{" "}
                  </h3>
                </div>
                <br />
              </div>
            </div>
            <div className="review1 container-sm mt-2 shadow-lg rounded text-center">
              <h2 className="pt-4 fs-4"><FaRocket /> Productos relacionados</h2>
              <Relation> 
                {allComponents?.filter((el)=>el.subCategory === details?.subCategory && el.name !== details?.name).slice(0,3).map((el, index) => {
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
              </Relation>
            </div>

          <div className="review1 container-sm mt-2 shadow-lg rounded">
                <br />
                <div className="review">
                  {details.review.length !== 0 ? (
                    <div>
                      <h4 className="h-rating text-center fs-3"><FaRegComments /> Reviews</h4>
                      <div className="container text-center">
                        <div className="row">
                          {details.review.map(e=>
                          <>
                              <div className="col-9">
                              <Review className="text-start mt-2">
                                <h4 className="review fs-6 border-muted text-muted"><FaUserAstronaut /> {e.user}</h4>
                                <hr className="text-muted mt-0 mb-0"/>
                                <h3 className="mt-2 ms-2 fs-6 text-muted"><FaCommentDots /> Comentario:</h3>
                                <h2 className="fs-5 ms-3">{e.comentario}</h2>
                              </Review>
                            </div>
                            <div className="col-3 text-light mt-2">
                                  <div className="container text-center mt-4">
                                    <div className="row">
                                      <div className="col">
                                        <button className="btn btn-dark" onClick={() => cont1()}><MdThumbDown className="fs-4 me-2"/> {/* <p className="text-muted">{contador1}</p> */}</button>
                                      </div>
                                      <div className="col">
                                        <button className="btn btn-dark">< MdThumbUp className="fs-4 me-2" /> {/* <p className="text-muted">{contador1}</p> */}</button>
                                      </div>
                                    </div>
                                  </div>
                            </div>
                          </>
                              )}

                        </div>
                      </div>
                    <br />
                    </div>
                  ) : (
                    <div className="container pb-3 text-center">
                        <Review className="mb-2 text-muted">Sin review</Review>
                    </div>
                  )}
                </div>
              </div>

          </section>
          <Toaster position="bottom-right" reverseOrder={false} />
        </div>
      ) : (
        <Loader/>
      )}
    </>
  );
};

export default Detail;

const Relation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #212529;
  width: 100%;
  margin: 20px;
  padding: 20px;
`

const Review = styled.div`
  justify-content: center;
  background-color:#181A1B;
  color:aliceblue;
  width: 100%;
  padding: 1em;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgb(0 0 0 / 30%);
  margin-top: 2em;
  font-family: Arial, sans-serif;
`