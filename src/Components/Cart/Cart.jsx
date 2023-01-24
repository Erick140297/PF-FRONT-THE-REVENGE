import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../Redux/Actions";

const Cart = () => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  console.log(cart)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart(user._id));
  }, [dispatch]);

  return (
    <div>
      {Object.entries(cart).length === 0 ? (
        <div>Loanding...</div>
      ) : (
        <div>
          {cart.message ? (
            <div>
              <p>{cart.message}</p>
            </div>
          ) : (
            <div>{cart.items?.map((el, i)=>{
              return(
                <div key={i}>
                  <h2>{el.product.name}</h2>
                  <h3>- Cantidad: {el.quantity} +</h3>
                  </div>
              )
            })}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
