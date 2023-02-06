import React from "react";
import "./Alert.css";

const Alert = () => {
  return (
    <div>
      <div role="document" className="modal-dialog">
        <div className="">
          <div className="modal-body">
            <img
              className="img_alert"
              alt="logo maximus para volver al home"
              src="https://icons.veryicon.com/png/o/application/awesome-common-free-open-source-icon/user-slash.png"
            />
            <p className="p2">Usuario Deshabilitado</p>
            <p className="p3">
              Por Favor comuniquese con GALAXIA TECH en la brevedad.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
