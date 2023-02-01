import React from "react";
import styled from "styled-components";
import "animate.css";
import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <>
      <Text>Opciones de Administrador</Text>
      <Container>
        <Buttonn className="animate__animated animate__bounce">
          <Link to="/admin/user">Usuarios</Link>
        </Buttonn>
        <Buttonn className="animate__animated animate__bounce">
          <Link to="/admin/dashboard">Dasboard</Link>
        </Buttonn>
        <Buttonn className="animate__animated animate__bounce">
          <Link to="/admin/products">Productos</Link>
        </Buttonn>
        <Buttonn className="animate__animated animate__bounce">
          <Link to="/admin/orders">Ordenes de compra</Link>
        </Buttonn>
      </Container>
    </>
  );
};

export default DashBoard;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 70vh;
  padding: 0px;
  justify-content: space-evenly;
`;

export const Buttonn = styled.button`
  background-color: #212627;
  border: 1px solid transparent;
  border-radius: 10px;
  font-size: 25px;
  font-weight: 1000;
  width: 25%;
  height: 15%;
  transition: 0.3s;
`;
export const Text = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap");
  font-family: "Oswald", sans-serif;
  display: flex;
  border-radius: 0px 0px 50px 50px;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 700;
  /* width: 100%; */
  margin-left: 10%;
  margin-right: 10%;
  height: 2em;
  background-color: #212529;
  color: whitesmoke;
`;
