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
        <div className="containerInfoTableOrder">
          <ul className="ul">
            <div className="containHeadr me-5">Usuario</div>
            <div className="containHeadr ">Orden</div>
            <div className="containHeadr "></div>
            <div className="containHeadr">Precio Total</div>
            <div className="containHeadr">Estado</div>
            <div className="containHeadr">Fecha</div>
            <div className="containHeadr">Acciones</div>
          </ul>

          {currentOrder.length > 0 &&
            currentOrder.map((order) => (
              <div
                className={"containerOrderProducts"}>
                <div className="containCardInfo">
                  {order.user}
                </div>
                <div className="containCardInfo">
               <>
                 {order._id}<img
                    className="img-orders ms-3"
                    src={order.cart.items[0].product.image.secure_url}
                    alt=""
                  />
               </> 
                </div>

                <div className="containCardPrice">
                   $ {order.total}
                </div>
                <div
                  className={
                    order.status === "pendiente"
                      ? "containerPendiente"
                      : order.status === "pagado"
                      ? "containerPagado"
                      : order.status === "enviado"
                      ? "containerEnviado"
                      : order.status === "entregado"
                      ? "containerEntregado"
                      : "containCardStatus"
                  }
                >
                   {order.status}
                </div>
                <div className="containCardDate">
                   {order.date}
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
