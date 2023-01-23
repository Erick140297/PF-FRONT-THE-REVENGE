import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../Redux/Actions";
// import { Link } from "react-router-dom";
import "./Detail.css";

export default function Detail(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    console.log(props)
  }, [dispatch]);

  const details = useSelector((state) => state.detail);
  console.log(details);
  return (
    <>
    <section className="container sproduct my-5 pt-5">
      
      <div className="row">
        <div className="col-lg-5 col-md-12 col-12">
          <img
            className="img-fluid w-100 pb-1"
            src="https://res.cloudinary.com/dfaxzahb0/image/upload/v1674242741/Products/Logo_dpcrit.jpg"
            alt=""
          />
          <div className="small-img-group">
            <div className="small-img-col">
              <img
                src="https://res.cloudinary.com/dfaxzahb0/image/upload/v1674242741/Products/Logo_dpcrit.jpg"
                width="100%"
                className="small-img"
                alt=""
              />
            </div>
            <div className="small-img-col">
              <img
                className="small-img"
                src="https://res.cloudinary.com/dfaxzahb0/image/upload/v1674242741/Products/Logo_dpcrit.jpg"
                width="100%"
                alt=""
              />
            </div>
            <div className="small-img-col">
              <img
                className="small-img"
                src="https://res.cloudinary.com/dfaxzahb0/image/upload/v1674242741/Products/Logo_dpcrit.jpg"
                width="100%"
                alt=""
              />
            </div>
            <div className="small-img-col">
              <img
                className="small-img"
                src="https://res.cloudinary.com/dfaxzahb0/image/upload/v1674242741/Products/Logo_dpcrit.jpg"
                width="100%"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12">
            <h6 >Titulo</h6>
            <h3 className="text-detail py-4">Titulo</h3>
            <h2 >Titulo</h2>
            <select name="" id="">
            <option>Select</option>
                <option>Se</option>
                <option>Selt</option>
                <option>lect</option>
            </select>
              <input type="number" name="1" />
            <button type="button" class="btn btn-danger">Add to Cart</button>
            <h4 className="text-detai mt-5 mb-5">Product Details</h4>
            <span className="p-detail">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi assumenda nostrum neque sunt quae, tenetur illum repellat nesciunt odio esse accusamus voluptatem vero impedit sit molestias. Quidem laborum mollitia placeat?</span>
            <div className="hola">
            </div>
        </div>
      </div>
  
    </section>
    {/* <section id="featured" className="my-5 pb-5">
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


    </section> */}
    </>
  );
}
