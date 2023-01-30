import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { getAllOrders } from "../../../../Redux/Actions";
import "./AdminOrderEdit.css";
import { useParams, Link } from "react-router-dom";

const validate = (value) => {
  const errors = {};
  if (!value) {
    errors.name =
      "Debes Ingresar Un Nombre mayor a 2 letras y no debe incluir caracteres especiales ni símbolos";
  }
  return errors;
};

function onlyOneDifficulty(value) {
  var x = document.getElementsByName("status");
  var i;
  for (i = 0; i < x.length; i++) {
    if (x[i].value !== value) x[i].checked = false;
  }
}

function AdminOrderEdit(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders());
  }, []);

  const { AllOrders } = useSelector((state) => state);
  const { user } = useSelector((state) => state);
  const propsID = useParams().id;

  const oneOrder = AllOrders.filter((item) => item._id === propsID);

  const [input, setInput] = useState("");
  /* const [estadoAct, setEstadoAct] = useState({ status: oneOrder[0].status }) */

  const [errors, setErrors] = useState({});

  const handleCheckBox = (e) => {
    /* setEstadoAct({
            status:e.target.value
        }) */
    if (e.target.checked) {
      setInput(e.target.value);
      setErrors(validate(e.target.value));
      onlyOneDifficulty(e.target.value);
    }
  };

  const orderUpdate = {
    email: user.email,
    status: input,
  };

  // const handleSubmit = (e) => {
  //   /* e.preventDefault() */
  //   dispatch(updateorder(propsID, orderUpdate));
  //   window.history.back();
  // };

  return (
    <div className="containerAll1">
      <Link to="/dashboard"><button className="btnAbout">Volver</button></Link>
      {oneOrder.length === 1 &&
        oneOrder.map((item) => (
          <div className="containerAll">
            <div className="containerPandO">
              <div className="productCont">
                <div className="containerTitle">
                  <span className="span-order"> Número de Orden:</span>
                  <p>{item._id}</p>
                </div>
                <div className="containerTitle">
                  <span className="span-order">Usuario: </span>
                  <p>{item.user}</p>
                </div>
                <div className="containerTitle">
                  <span className="span-order">Precio total: </span>
                  <p>${item.cart.items[0].product.price}</p>
                </div>
                <div className="containerTitle">
                  <span className="span-order"> Fecha: </span>
                  <p>{item.date}</p>
                </div>
              </div>

              <div className="ckeckbox">
                <div className="estadoAct"> Estado actual</div>
                <div className="greymatter"> {oneOrder[0]?.status}</div>
                <hr className="hR" />
                <label className="text">
                  {" "}
                  Procesando Pago
                  <div className="circulo">
                    <input
                      className="season"
                      type={"checkbox"}
                      name={"status"}
                      value={"Procesando Pago"}
                      id="status"
                      onChange={(e) => handleCheckBox(e)}
                    />
                  </div>
                </label>

                <hr className="hR" />
                <label className="text">
                  {" "}
                  Preparando Envío
                  <div className="circulo">
                    <input
                      className="season"
                      type={"checkbox"}
                      name={"status"}
                      value={"Preparando Envio"}
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
                      value={"Enviado"}
                      id="status"
                      onChange={(e) => handleCheckBox(e)}
                    />{" "}
                  </div>
                </label>

                <hr className="hR" />

                <label className="text">
                  {" "}
                  Completado
                  <div className="circulo">
                    <input
                      className="season"
                      type={"checkbox"}
                      name={"status"}
                      value={"Completado"}
                      id="status"
                      onChange={(e) => handleCheckBox(e)}
                    />
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
