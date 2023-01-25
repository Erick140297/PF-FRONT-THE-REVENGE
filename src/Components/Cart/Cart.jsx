import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../Redux/Actions";
import { MdAttachMoney, MdShoppingCart, MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../Loader/Loader";

const Cart = () => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const update = async (cartId, productId, quantity) => {
    const { data } = await axios.put("http://localhost:3001/shoppingCart", {
      cartId,
      productId,
      quantity,
    });
    dispatch(getCart(user._id));
  };
  const deleteProduct = async (cartId, productId) => {
    const { data } = await axios.delete("http://localhost:3001/shoppingCart", {
      data: { cartId, productId },
    });
    toast.success("Producto eliminado del carrito");
    dispatch(getCart(user._id));
  };

  useEffect(() => {
    dispatch(getCart(user._id));
  }, [dispatch]);

  return (
    <div>
      {Object.entries(cart).length === 0 ? (
        <Loader />
      ) : (
        <div>
          {cart.message ? (
            <div>
              <p>{cart.message}</p>
            </div>
          ) : (
            <div>
              <h1 className="text-center mt-4 text-light">
                <MdShoppingCart /> Tu carrito
                <button className="btn btn-primary float-end ms-2">
                  Total: $ {500}
                  <br />
                  Pagar
                </button>
                <button className="btn btn-warning float-end">Vaciar 
                <br />
                carrito</button>
              </h1>
              {cart.items?.map((el, i) => {
                return (
                  <div
                    key={i}
                    className="container-md mt-4 mb-4 shadow p-3 mb-4 bg-dark rounded"
                  >
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-outline-danger fs-2 float-end mt-2 me-4 ms-4"
                        onClick={() => deleteProduct(cart._id, el.product._id)}
                      >
                        <MdDeleteOutline />
                      </button>
                      <img
                        className="img-fluid rounded float-end mt-2 me-4"
                        src={el.product.image.secure_url}
                        alt="imagenProduct"
                        style={{ width: "180px", height: "180px" }}
                      ></img>
                    </div>
                    <h2 className="mb-4 mt-1">{el.product.name}</h2>
                    <h4 className="text-light fs-5">Cantidad: </h4>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic outlined example"
                    >
                      {el.quantity > 1 ? (
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={() =>
                            update(cart._id, el.product._id, el.quantity - 1)
                          }
                        >
                          -
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={() =>
                            toast.error("Solo pudes comprar desde 1!")
                          }
                        >
                          -
                        </button>
                      )}
                      <h4 className="text-light fs-5 me-4 ms-4 mt-2">
                        {el.quantity}
                      </h4>
                      {(el.product.stock - el.quantity) <= 0 ? (
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={() => toast.error("Stock no disponible!")}
                        >
                          +
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={() =>
                            update(cart._id, el.product._id, el.quantity + 1)
                          }
                        >
                          +
                        </button>
                      )}
                    </div>
                    <h2 className="mt-2">
                      <MdAttachMoney /> {el.product.price * el.quantity}
                    </h2>
                    <h2 className="mt-2 fs-6 ">
                      Stock disponible ({el.product.stock - el.quantity})
                    </h2>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
