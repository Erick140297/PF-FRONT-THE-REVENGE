import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./payment.css";
import { useAuth0 } from "@auth0/auth0-react";


const Payment = () => {
  const cartId = JSON.parse(window.localStorage.getItem("cartId"));
  const orderId = JSON.parse(window.localStorage.getItem("orderId"))
  const { logout, user } = useAuth0();;

  const emptyCart = async () => {
    await axios.delete(
      "https://pf-back-the-revenge-production.up.railway.app/shoppingCart",
      {
        data: { cartId },
      }
    );
  };

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
              <h3>Please, Don't forget to rate your service.</h3>
            </i>
          </label>
        </div>
        <div className="mb-4 fs-5">
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            Back
          </Link>
        </div>
      </div>
    </div>
      ) : <div className="container-sm shadow-lg p-3 mb-4 mt-4 bg-dark rounded text-center">
        <h1 className="fs-2 fw-semibold pb-2 border-bottom border-muted text-light">Lo sentimos, tuvimos un problema!</h1>
      </div>
    }
    </>
    
  );
};

export default Payment;
