import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllOrders,
  updateorder,
  updateOrderStatus,
} from "../../../../Redux/Actions";
import "./AdminOrderEdit.css";
import { useParams, Link } from "react-router-dom";

function onlyOneDifficulty(value) {
  var x = document.getElementsByName("status");
  var i;
  for (i = 0; i < x.length; i++) {
    if (x[i].value !== value) x[i].checked = false;
  }
}

function AdminOrderEdit() {
  const { AllOrders } = useSelector((state) => state);

  const { usersAdmin } = useSelector((state) => state);

  const propsID = useParams().id;

  const idToFilter = propsID;

  const userId = usersAdmin.filter((obj) => obj.orders.includes(idToFilter));
  console.log(userId)
  const oneOrder = AllOrders.filter((item) => item._id === propsID);

  const [input, setInput] = useState("");

  const [errors, setErrors] = useState({});

  const user = userId[0]._id;
  const userEmail = userId[0].email;
  const userName = userId[0].name;


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  const handleCheckBox = (e) => {
    if (e.target.checked) {
      setInput(e.target.value);
      onlyOneDifficulty(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedOrder = {
      ...oneOrder,
      status: input,
    };
    dispatch(updateorder(propsID, updatedOrder));
    dispatch(updateOrderStatus(user, updatedOrder));
    window.history.back();
  };

  return (
    <div className="containerAll1">
      <Link to="/admin/orders">
        <button className="btnAbout">Volver</button>
      </Link>
      {oneOrder.length === 1 &&
        oneOrder.map((item) => (
          <div className="containerAll">
            <div className="containerPandO">
              <div className="productCont">
                <div className="containerTitle">
                  <span className="span-order me-2 text-start">
                    {" "}
                    Número de Orden:
                  </span>
                  <p className="mt-4 fs-6">{item._id}</p>
                </div>
                <div className="containerTitle">
                  <span className="span-order me-2 text-start">Usuario: </span>
                  <p className="mt-4 fs-6">{userName}</p>
                </div>
                <div className="containerTitle">
                  <span className="span-order me-2 text-start">Email: </span>
                  <p className="mt-4 fs-6">{userEmail}</p>
                </div>
                <div className="containerTitle">
                  <span className="span-order me-2 text-start">
                    Precio total:{" "}
                  </span>
                  <p className="mt-4 fs-6">
                    ${item.cart.items[0].product.price}
                  </p>
                </div>
                <div className="containerTitle">
                  <span className="span-order me-2 text-start"> Fecha: </span>
                  <p className="mt-4 fs-6">{item.date}</p>
                </div>
              </div>

              <div className="ckeckbox">
                <div className="estadoAct"> Estado actual</div>
                <div className="greymatter"> {oneOrder[0]?.status}</div>
                <hr className="hR" />
                <label className="text">
                  {" "}
                  Pagado
                  <div className="circulo">
                    <input
                      className="season"
                      type={"checkbox"}
                      name={"status"}
                      value={"pagado"}
                      id="status"
                      onChange={(e) => handleCheckBox(e)}
                    />
                  </div>
                </label>

                <hr className="hR" />
                <label className="text">
                  {" "}
                  Enviado
                  <div className="circulo">
                    <input
                      className="season"
                      type={"checkbox"}
                      name={"status"}
                      value={"enviado"}
                      id="status"
                      onChange={(e) => handleCheckBox(e)}
                    />
                  </div>
                </label>
                <hr className="hR" />
                <label className="text">
                  {" "}
                  Entregado
                  <div className="circulo">
                    <input
                      className="season"
                      type={"checkbox"}
                      name={"status"}
                      value={"entregado"}
                      id="status"
                      onChange={(e) => handleCheckBox(e)}
                    />{" "}
                  </div>
                </label>
                <div className="buttonCont">
                  <button
                    className="loginButton"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Guardar
                  </button>
                </div>
              </div>
              {errors.name && <p className="text-error">{errors.name}</p>}
              <br />
            </div>
          </div>
        ))}
    </div>
  );
}

export default AdminOrderEdit;
