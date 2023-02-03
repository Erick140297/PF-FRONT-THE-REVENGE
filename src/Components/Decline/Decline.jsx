import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Decline.css";

const Decline = () => {
  const orderId = JSON.parse(window.localStorage.getItem("orderId"));

  const changeOrderStatus = async () => {
    await axios.put(
      `https://pf-back-the-revenge-production.up.railway.app/order/${orderId}`,
      {
        status: "cancelado",
      }
    );
  };

  useEffect(() => {
    changeOrderStatus();
  }, []);

  return (
    <div className="loginnds">
      <div className="container-sm shadow p-3 mb-4 mt-4 bg-dark rounded">
        <h1 className="fs-2 fw-semibold pb-2 border-bottom border-muted">
          <i className="bi bi-emoji-laughing h4 pb-2 mb-4 me-2"></i>
          <i className="bi bi-box2-heart-fill h4 pb-2 mb-4 me-4 ms-4"></i>
          <i className="bi bi-emoji-laughing h4 pb-2 mb-4 me-2"></i>
        </h1>
        <div>
          <label className="text-muted mb-2 mt-4" htmlFor="">
            Lo sentimos, la compra no fue exitosa.

          </label>
          <br />
        </div>
        <div className="mb-4 mt-4 fs-5">
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Decline;
