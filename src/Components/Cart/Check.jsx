import React, { useState, useEffect } from "react";
import { updateProfile, getInfoUser } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import toast from "react-hot-toast";
import axios from "axios";

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
    <div>
      <h2>¿Deseas editar la direccion de tu compra?</h2>
        <div>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              name="address"
              placeholder={info.address}
              onChange={handleChange}
            />
            <label className="lbl-nombre">
              <span className="text-nomb">Dirección</span>
            </label>
          </form>
          <button onClick={handleSubmit}>actualizar</button>
        </div>

      <button onClick={()=>handlePayment(total(cart))}>Pagar</button>
    </div>
  );
};

export default Check;
