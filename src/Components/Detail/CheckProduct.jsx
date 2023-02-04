import React, { useState, useEffect } from "react";
import { getDetail, getCart, getInfoUser } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
// import styles from "./check.css"

const CheckProduct = (props) => {
  const id = props.match.params.id;
  const history =  useHistory()
  const details = useSelector((state) => state.detail);
  const info = useSelector((state) => state.Admin);
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getInfoUser(user.email));
      dispatch(getDetail(id))
      dispatch(getCart(user.email));
    }
  }, [dispatch]);

 const handleClick = () => {
    if (isAuthenticated) {
      history.push("/cart")
    } else {
      toast.error("Por favor inicia sesión");
    }
  };

  const handlePayment = async (total) => {
    const { data } = await axios({
      method: "post",
      url: "https://pf-back-the-revenge-production.up.railway.app/order",
      data: {
        email: user.email,
        cart: cart,
        total: total,
      },
    });

    const response = await axios({
      method: "post",
      url: "https://pf-back-the-revenge-production.up.railway.app/create-order",
      data: {
        value: total,
        description: JSON.stringify(data),
      },
    });
    window.localStorage.setItem("orderId", JSON.stringify(data));
    window.location.href = response.data.links[1].href;
  };

  const total = (cart) => {
    let sum = 0;
    cart.items.map((el) => {
      sum += el.quantity * el.product.price;
    });
    return sum;
  };

  return (
    <div className="container-sm shadow-lg p-3 mb-4 mt-4 bg-dark rounded text-center">
      <h2 className="text-center mt-4 mb-4">Agregaste a tu carrito</h2>
        <div className="container-sm w-50 shadow-lg p-3 mb-4 mt-4 bg-dark rounded text-center">
        <br />
        <p>{details?.name}</p>
        <img className="img-fluid rounded mt-2 me-4" src={details.image?.secure_url} alt="imagenProduct" style={{ width: "180px", height: "180px" }}></img>
        <p>${details?.price}</p>
        <br />
        </div>
      <button className="btn btn-danger" onClick={()=>handlePayment(total(cart))}>Comprar carrito</button>
      <button type="button" className="btn btn-danger"
              onClick={() => {
                    handleClick();
                  }}
      > Ver carrito </button>
    </div>
  );
};

export default CheckProduct;
