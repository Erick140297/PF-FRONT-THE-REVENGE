import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar/SearchBar";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineLogin,
} from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  console.log(isAuthenticated);
  console.log(user);
  return (
    <>
      <NavContainer>
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <ContainerLogo>
            <img
              src="https://res.cloudinary.com/dfaxzahb0/image/upload/v1674242741/Products/Logo_dpcrit.jpg"
              alt="Logo"
            />
            <h2>Galaxia Tech</h2>
          </ContainerLogo>
        </Link>
        <SearchBar />
        <div>
          {isAuthenticated ? (
            <Link
              to={"/profile"}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Count>
                <User />
                <span>Mi cuenta</span>
              </Count>
            </Link>
          ) : (
            <LoginButton onClick={() => loginWithRedirect()}>
              <Login />
              <span>Iniciar sesión</span>
            </LoginButton>
          )}
        </div>
        <Link to={"/cart"} style={{ textDecoration: "none", color: "black" }}>
          <Cart>
            <ShoppingCart />
            <span>Mi carrito </span>
            <Number>{1}</Number>
          </Cart>
        </Link>
      </NavContainer>
    </>
  );
};

export default NavBar;

const NavContainer = styled.nav`
  h2 {
    color: #7230ff;
    font-weight: 600;
  }
  span {
    color: white;
    margin-left: 10px;
  }
  width: 100%;
  font-family: sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: black;
`;

const ContainerLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h2 {
    margin-left: 10px;
  }
  img{
    width: 200px;
  }
`;

const Count = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
  &:hover {
    background: #ff7c02fe;
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

const Cart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 5px;
  &:hover {
    background: #ff7c02fe;
    border-radius: 5px;
    padding-left: 5px;
  }
`;

const ShoppingCart = styled(AiOutlineShoppingCart)`
  color: white;
`;

const User = styled(AiOutlineUser)`
  color: white;
`;
const Number = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  margin-left: 10px;
  background-color: #7230ff;
  border-radius: 100%;
  width: 25px;
`;

const LoginButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  padding-left: 5px;
  padding-right: 5px;

  &:hover {
    background: #ff7c02fe;
    border-radius: 5px;
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer;
  }
`;

const Login = styled(AiOutlineLogin)`
  color: white;
`;
