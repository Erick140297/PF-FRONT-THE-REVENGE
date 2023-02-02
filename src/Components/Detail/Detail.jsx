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
import Card from "../Card/Card";
import { Link } from "react-router-dom";

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
      toast.success("Producto agregado al carrito")
      history.push("/cart")
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
                    <h3 className="stock-disponible">
                      Stock disponible ({details?.stock})
                    </h3>
                  ) : (
                    <h3>Poco stock disponible ({details?.stock})</h3>
                  )}
                </div>
                <br />
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Añadir al carrito
                </button>
                <br />
                <div className="rating">
                  {details?.rating.length > 1 ? (
                    <div>
                      <h4 className="h-rating">Rating del producto</h4>
                      <Rating
                        name="half-rating-read"
                        defaultValue={
                          details?.rating ? (
                            promedio(details?.rating)
                          ) : (
                            <h3>Sin rating</h3>
                          )
                        }
                        precision={0.1}
                        readOnly
                      />
                    </div>
                  ) : (
                    <h3>Sin rating aún</h3>
                  )}
                </div>
                <div className="product-description-container">
                  <h3 className="text-detai mt-5 mb-5">
                    Descripción:
                    <p className="p-detail">{details?.description}</p>{" "}
                  </h3>
                </div>
              </div>
            </div>
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

          </section>
          <Toaster position="bottom-right" reverseOrder={false} />
        </div>
      ) : (
        <p>No se pudo cargar el detalle</p>
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