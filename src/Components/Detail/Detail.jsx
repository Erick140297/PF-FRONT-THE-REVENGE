import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail, setLoader } from "../../Redux/Actions";
import Loader from "../Loader/Loader";
// import { Link } from "react-router-dom";
import "./Detail.css";


const Detail = (props) => {


  const id = props.match.params.id;
  console.log('este es el id -->',id);


  const dispatch = useDispatch();
  const details = useSelector((state) => state.detail);
  const loading = useSelector((state) => state.loader);


  console.log('este es el detail--->',details);


  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    return () => {
      dispatch(setLoader())
    }
  }, [dispatch]);


  return (
    <>
    {
      loading?(
        <Loader/>
      ):
    <div>
      <section className="container sproduct my-5 pt-5">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-12">
            <img
              className="img-fluid w-100 pb-1"
              src={details.image.secure_url}
              alt=""
            />
     
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <h2>{details.name}</h2>
            <h6 className="text-detail py-4"></h6>
            <h2>$ {details.price}</h2>
            <button type="button" className="btn btn-danger">
              Añadir al carrito
            </button>
            <h3>{details.brand}</h3>
            {/* <span>{details.review}</span> */}
            <h4 className="text-detai mt-5 mb-5">Descripción: </h4>
            <span className="p-detail">
            {details.description}
            </span>
            <div className="hola"></div>
          </div>
        </div>
      </section>
    </div>
}
</>
  );
};

export default Detail;
{
  /* <section id="featured" className="my-5 pb-5">
  <div className="container text-center mt-5 py-5">
  <h3>Related Products</h3>
        <hr className="mx-auto"/>
      </div>
      <div className="row mx-auto container-fluid">
        <div className="product text-center col-lg-3 col-md-4 col-12">
          <img className="img-fluid mb-3" src="https://play-lh.googleusercontent.com/LS7e70lkgIyJHxBWKr1YY5BRytD7Aw2th-dk8K66kU-c-fkr5e2Yo3Eh2RK9vFanYh8" alt="" />
          <div className="star">
            <i className="fas fa-star">⭐</i>
            <i className="fas fa-star">⭐</i>
            <i className="fas fa-star">⭐</i>
            <i className="fas fa-star">⭐</i>
            <i className="fas fa-star">⭐</i>
            
          </div>
          <h5 className="p-name">Titulo-Nombre</h5>
          <h4 className="p-price">Precio</h4>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
      <div className="row mx-auto container-fluid">
        <div className="product text-center col-lg-3 col-md-4 col-12">
          <img className="img-fluid mb-3" src="https://play-lh.googleusercontent.com/LS7e70lkgIyJHxBWKr1YY5BRytD7Aw2th-dk8K66kU-c-fkr5e2Yo3Eh2RK9vFanYh8" alt="" />
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h5 className="p-name">Titulo-Nombre</h5>
          <h4 className="p-price">Precio</h4>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
      <div className="row mx-auto container-fluid">
        <div className="product text-center col-lg-3 col-md-4 col-12">
          <img className="img-fluid mb-3" src="https://play-lh.googleusercontent.com/LS7e70lkgIyJHxBWKr1YY5BRytD7Aw2th-dk8K66kU-c-fkr5e2Yo3Eh2RK9vFanYh8" alt="" />
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h5 className="p-name">Titulo-Nombre</h5>
          <h4 className="p-price">Precio</h4>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
      <div className="row mx-auto container-fluid">
        <div className="product text-center col-lg-3 col-md-4 col-12">
          <img className="img-fluid mb-3" src="https://play-lh.googleusercontent.com/LS7e70lkgIyJHxBWKr1YY5BRytD7Aw2th-dk8K66kU-c-fkr5e2Yo3Eh2RK9vFanYh8" alt="" />
          <div className="star">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <h5 className="p-name">Titulo-Nombre</h5>
          <h4 className="p-price">Precio</h4>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>


    </section> */
}
