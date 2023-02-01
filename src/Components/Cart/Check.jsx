import React from "react";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Check = () => {

  if (Object.entries(cart).length != 0) {
    window.localStorage.setItem("cartId", JSON.stringify(cart._id));
  }

  const { user } = useAuth0();
  const cart = useSelector((state) => state.cart);

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


      <h2>Por favor confirma que tu domicilio sea el siguente</h2>

      <h2>Domicilio</h2> <button>Actualizar</button>


      <button onClick={()=>handlePayment(total(cart))}>Pagar</button>
    </div>
  );
};

export default Check;
