import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllOrders} from "../../../Redux/Actions";
import {NavLink} from 'react-router-dom'
import  './Orders.css'
import PaginadoOrder from './PaginadoOrder';

// UserEmail: "isaiasrobles2003@gmail.com"
// date: "2022-08-26"
// orderN: "03471734AF6562409"
// status: "Procesando Pago"
// totalPrice: 204000

function AdminOrders() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllOrders());
    },[])

    const {AllOrders} = useSelector(state => state)

    let [currentPage, setCurrentPage] = useState(1);
    let [orderPerPage, setCategoryPerPage] = useState(5);
    let indexOfLastOrder = currentPage * orderPerPage;
    let indexOfFirstOrder= indexOfLastOrder - orderPerPage;
    let currentOrder = AllOrders.slice(
      indexOfFirstOrder,
      indexOfLastOrder
    );

  return (
    <div className="">
      

    <div className="productContainer">
      <div className="containerInfoTable">
          <ul className="ul">
            <div className="containHeadr">
              Usuario
            </div>
            <div className="containHeadr">
              Orden
            </div>
            <div className="containHeadr">
            </div>
            <div className="containHeadr">
            Precio Total
            </div>
            <div className="containHeadr">
              Estado
            </div>
            <div className="containHeadr">
              Fecha
            </div>
            <div className="containHeadr">
              Acciones
            </div>
          </ul>

          {currentOrder.length > 0 &&
            currentOrder.map(order => (
              
              <div
              className={
                order.status === "Procesando Pago"
                  ? "containercDisable"
                  : order.status === "Enviado"
                  ? "containercAgotado"
                  : order.status === "Preparando Envio"
                  ? "containercLow"
                  : order.status === "Completado"
                  ? "containercDiscount"
                  : "containerc"
              }
            >
                <div className="containCardInfo">
                  <p className='p-order'> {order.user}</p>
                </div>
                <div className="containCardInfo">
                  <p className='p-order'> {order._id}</p>
                  <img className='img-orders' src={order.cart.items[0].product.image.secure_url} alt="" /> 
                </div>

                <div className="containCardInfo">
                  <p> $ {order.total}</p>
                </div>
                <div className="containCardInfo">
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
                </div>

                
            </div>

            ))}
        </div>
        <div className="containerPaginate">
                  <PaginadoOrder
                  ordersPerPage={orderPerPage}
                  allOrders={AllOrders.length}
                  paginado={setCurrentPage}/>
                </div>

        
      </div>
    </div>
    
  )
}

export default AdminOrders