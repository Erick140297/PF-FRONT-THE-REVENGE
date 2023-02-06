import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders,deletePurchaseOrder } from "../../../Redux/Actions";
import { NavLink } from "react-router-dom";
import "./Orders.css";
import PaginadoOrder from "./PaginadoOrder";

function AdminOrders() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  const { AllOrders } = useSelector((state) => state);
  const users = useSelector((state) => state.usersAdmin);
  console.log("REREERERERE", users);

  let [currentPage, setCurrentPage] = useState(1);
  let [orderPerPage, setCategoryPerPage] = useState(5);
  let indexOfLastOrder = currentPage * orderPerPage;
  let indexOfFirstOrder = indexOfLastOrder - orderPerPage;
  let currentOrder = AllOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  const handleDeleteOrder = (orderId) => {
    if(window.confirm("Estás seguro de que quieres eliminar esta orden?"))
   { dispatch(deletePurchaseOrder(orderId));}
  };

  return (
    <div className="">
      <NavLink to="/dashboard">
        <button className="btnAbout">Volver</button>
      </NavLink>

      <div className="productContainer">
        <div className="containerInfoTable">
          <ul className="ul">
            <div className="containHeadr ps-4 me-4">Usuario</div>
            <div className="containHeadr ps-4">Orden</div>
            <div className="containHeadr "></div>
            <div className="containHeadr ps-4">Precio Total</div>
            <div className="containHeadr">Estado</div>
            <div className="containHeadr">Fecha</div>
            <div className="containHeadr me-3">Acciones</div>
          </ul>

          {currentOrder.length > 0 &&
            currentOrder.map((order) => (
              <div
                className={
                  // order.status === "Procesando Pago"
                  //   ? "containercDisable"
                  //   : order.status === "Enviado"
                  //   ? "containercAgotado"
                  //   : order.status === "Preparando Envio"
                  //   ? "containercLow"
                  //   : order.status === "Completado"
                  //   ? "containercDiscount"
                  "containerc"
                }
              >
                <div className="containCardInfo">
                  <p className="p-order"> {order.user}</p>
                </div>
                <div className="containCardInfo">
                  <p className="p-order"> {order._id}</p>
                  <img
                    className="img-orders ms-2"
                    src={order.cart.items[0].product.image.secure_url}
                    alt=""
                  />
                </div>

                <div className="containCardInfo">
                  <p> $ {order.total}</p>
                </div>
                <div
                  className={
                    order.status === "pendiente"
                      ? "containercAgotado"
                      : order.status === "pagado"
                      ? "containercLow"
                      : order.status === "enviado"
                      ? "containercDiscount"
                      : order.status === "entregado"
                      ? "containercPendiente"
                      : "p"
                  }
                >
                  <p> {order.status}</p>
                </div>
                <div className="containCardInfo">
                  <p> {order.date}</p>
                </div>

                <div className="containerActions">
                  <NavLink to={`/order/update/${order._id}`}>
                    <div className="containerPencil">
                      <i class="fa-solid fa-pencil"></i>
                    </div>
                  </NavLink>
                  <div
                    className="containerTrash"
                    onClick={() => handleDeleteOrder(order._id)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="containerPaginate">
          <PaginadoOrder
            ordersPerPage={orderPerPage}
            allOrders={AllOrders.length}
            paginado={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default AdminOrders;
