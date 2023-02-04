import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";
import "./payment.css";
import { useAuth0 } from "@auth0/auth0-react";


const Payment = () => {
  const cartId = JSON.parse(window.localStorage.getItem("cartId"));
  const orderId = JSON.parse(window.localStorage.getItem("orderId"))
  const { user } = useAuth0();

  async function emptyCart() {
    await axios.delete(
      "https://pf-back-the-revenge-production.up.railway.app/shoppingCart",
      {
        data: { cartId },
      }
    );
  }

  const changeOrderStatus = async () => {
    await axios.put(
      `https://pf-back-the-revenge-production.up.railway.app/order/${orderId}`,
      {
        status: "pagado",
      }
    );
  };

  const changeStock = async () => {
    await axios.put(
      `https://pf-back-the-revenge-production.up.railway.app/logic/stock/${orderId}`
    );

  };

  useEffect(() => {
    changeStock();
    emptyCart();
    return () => {
      changeOrderStatus();
    };
  }, []);

  return (
    <>
    
    {
      user ? (
      <div className="loginnds">
      <div className="container-sm shadow-lg p-3 mb-4 mt-4 bg-dark rounded">
        <h1 className="fs-2 fw-semibold pb-2 border-bottom border-muted">
          <i className="bi bi-emoji-laughing h4 pb-2 mb-4 me-2"></i>
          <i className="bi bi-box2-heart-fill h4 pb-2 mb-4 me-4 ms-4"></i>
          <i className="bi bi-emoji-laughing h4 pb-2 mb-4 me-2"></i>
        </h1>
        <div>
        <label className="text-light mb-2 mt-4" htmlFor="">
            Hola {user.given_name}, hiciste una compra, genial!
          </label>
          <br />
          <label className="text-muted mb-2 mt-4" htmlFor="">
            <i className="bi bi-chat-left-text">
              <h3 className="fs-5">Por favor no olvides dejarnos tus comentarios a cerca de este producto.</h3>
            </i>
          </label>
        </div>
        <div className="d-md-flex justify-content-md-center">
          <div className="btn btn-dark-lg mb-4 mt-5 fs-5 border border-light w-25 ">
            <Link to={"/home"} style={{ textDecoration: "none" }}>
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
      ) : <Loader />
    }
    </>
    
  );
};

export default Payment;
