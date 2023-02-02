import React, { useState, useEffect } from "react";
import { updateProfile, getInfoUser } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import toast from "react-hot-toast";
import axios from "axios";
import styles from "./check.css"


const Check = () => {
  const info = useSelector((state) => state.Admin);
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
  const [input, setInput] = useState({
    address: ""
  });
  const cart = useSelector((state) => state.cart);
  
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getInfoUser(user.email));
      setInput({
        address: info.address
      });
    }
  }, [dispatch]);
  
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(info._id, input));
    setInput({
      address: ""
    });
    dispatch(getInfoUser(user.email));
    toast.success("Direccion actualizada");
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
      <h2 className="text-center mt-4 mb-4">¿Deseas editar la direccion de tu compra?</h2>
        <div className="container-sm w-50 shadow-lg p-3 mb-4 mt-4 bg-dark rounded text-center">
          <form onSubmit={handleSubmit} className="form mt-3 w-100">
            <input
              type="text"
              name="address"
              placeholder={info.address}
              onChange={handleChange}
              className="text-muted"
            />
            <label className="lbl-nombre mb-0">
              <span className="text-nomb mt-5">Dirección</span>
            </label>
          </form>
          <button className="ddsfvfdva mt-5 mb-3" onClick={handleSubmit}>Actualizar</button>
        </div>
      <button className="ddsfvfdva mt-1" onClick={()=>handlePayment(total(cart))}>Pagar</button>
    </div>
  );
};

export default Check;
