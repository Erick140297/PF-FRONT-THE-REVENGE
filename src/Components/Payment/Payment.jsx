import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";
import "./payment.css";
import { useAuth0 } from "@auth0/auth0-react";
import { FaCrown, FaGrinStars, FaHandHoldingHeart, FaComments} from 'react-icons/fa'


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
        <div>
          <div className="fs-1 fw-semibold pb-2 border-bottom border-muted text-light">
          <FaGrinStars className="me-2 fs-2"/>
          <FaCrown className="me-2 fs-1" />
          <FaGrinStars className="me-2 fs-2"/>
          </div>
          <div className="dcdsvdfv container w-75 mt-4 p-4 bg-dark rounded">
            <label className="text-light fs-2" htmlFor="">
            <FaHandHoldingHeart /> Hola {user.given_name}, hiciste una compra, genial! <FaHandHoldingHeart />
              </label>
          </div>
          {/* <div className="container w-50 mt-4 p-5 rounded bg-dark shadow-lg">
            <h2 className="fs-4 text-start">Detalle de tú compra:</h2>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
            <h1></h1>
          </div> */}
          <br />
        </div>
        <div className="w-100 rounded bg-dark shadow-sm">
          <label className="text-muted" htmlFor="">
            <i className="bi bi-chat-left-text">
              <FaComments />
              <h3 className="fs-6">Por favor no olvides dejarnos tus comentarios a cerca de este producto.</h3>
            </i>
          </label>
        <div className="d-md-flex justify-content-md-center">
          <div className="btn btn-dark-lg mb-4 mt-3 fs-5 border border-light w-25 ">
            <Link to={"/home"} style={{ textDecoration: "none" }}>
              Back
            </Link>
          </div>
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
