import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import styled from "styled-components";
import "./Alert.css";

const Alert = () => {

  const { logout, user } = useAuth0();

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
    <Container>

      <BtnCart
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin }})}
        >Salir</BtnCart>
        </Container>
    </div>
  );
};

export default Alert;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const BtnCart = styled.button`
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 1px solid transparent;
  color: black;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 1000;
  box-shadow: 0px 0px 10px 5px #c101f6;
  width: 20%;
  height: 60px;
  transition: 0.3s;
`;

