import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../Redux/Actions";
import { MdAttachMoney, MdShoppingCart, MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";

const Cart = () => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const update = async (cartId, productId, quantity) => {
    await axios.put("http://localhost:3001/shoppingCart", {
      cartId,
      productId,
      quantity,
    });
    dispatch(getCart(user._id));
  };
  const deleteProduct = async (cartId, productId) => {
    await axios.delete("http://localhost:3001/shoppingCart", {
      data: { cartId, productId },
    });
    toast.success("Producto eliminado del carrito");
    dispatch(getCart(user._id));
  };

  const emptyCart = async (cartId) => {
    await axios.delete("http://localhost:3001/shoppingCart", {
      data: { cartId },
    });
    toast.success("Tu carrito esta vacío");
    dispatch(getCart(user._id));
  };

  const total = (cart) => {
    let sum = 0;
    cart.items.map((el) => {
      sum += el.quantity * el.product.price;
    });
    return sum;
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
              <h1 className="text-center mt-4 text-light ">
                <MdShoppingCart /> {cart.message}
              </h1>
            </div>
          ) : (
            <div>
              <h1 className="text-center mt-4 text-light">
                <MdShoppingCart /> Tu carrito
                <button className="btn btn-primary float-end ms-2">
                  Total: $ {total(cart)}
                  <br />
                  Pagar
                </button>
                <button
                  className="btn btn-warning float-end"
                  onClick={() => emptyCart(cart._id)}
                >
                  Vaciar
                  <br />
                  carrito
                </button>
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
                            toast.error("Solo puedes comprar desde 1!")
                          }
                        >
                          -
                        </button>
                      )}
                      <h4 className="text-light fs-5 me-4 ms-4 mt-2">
                        {el.quantity}
                      </h4>
                      {el.product.stock - el.quantity <= 0 ? (
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
