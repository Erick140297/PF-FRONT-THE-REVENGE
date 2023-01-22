import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar/SearchBar";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineLogin,
  AiOutlineMenu,
} from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { postUser } from "../../Redux/Actions";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispach = useDispatch()
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  
  useEffect(() => {
    if(isAuthenticated){
      dispach(postUser({email:user.email, name: user.name}))
    }
  }, [])
  
  return (
    <>
      <NavContainer>
        <Link to={"/home"} style={{ textDecoration: "none", color: "black" }}>
          <ContainerLogo onClick={() => setShowMenu(!showMenu)}>
            <img
              src="https://res.cloudinary.com/dfaxzahb0/image/upload/v1674242741/Products/Logo_dpcrit.jpg"
              alt="Logo"
            />
            <h2>Galaxia Tech</h2>
          </ContainerLogo>
        </Link>
        <MobileIcon onClick={() => setShowMenu(!showMenu)}>
          <Menu />
        </MobileIcon>
        <ItemsContainer open={showMenu}>
          <SearchBar />
          <div>
            {isAuthenticated ? (
              <Link
                to={"/profile"}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Count onClick={() => setShowMenu(!showMenu)}>
                  <User />
                  <span>Mi cuenta</span>
                </Count>
              </Link>
            ) : (
              <LoginButton
                onClick={() => {
                  loginWithRedirect();
                }}
              >
                <Login />
                <span>Iniciar sesión</span>
              </LoginButton>
            )}
          </div>
          <Link to={"/cart"} style={{ textDecoration: "none", color: "black" }}>
            <Cart onClick={() => setShowMenu(!showMenu)}>
              <ShoppingCart />
              <span>Mi carrito </span>
              <Number>{1}</Number>
            </Cart>
          </Link>
        </ItemsContainer>
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
  height: 120px;
  font-family: sans-serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  @media (max-width: 1100px) {
    h2 {
      color: #7230ff;
      font-weight: 400;
      font-size: 20px;
    }
  }
`;

const ContainerLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h2 {
    margin-left: 10px;
  }
  img {
    width: 200px;
    height: 120px;
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
  margin-left: 15px;
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

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 950px) {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

const Menu = styled(AiOutlineMenu)`
  color: white;
  margin-right: 0.5rem;
  font-size: 30px;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 950px) {
    position: absolute;
    top: 120px;
    right: ${({ open }) => (open ? "0%" : "-105%")};
    width: 100%;
    height: 150px;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
    background-color: black;
    z-index: 1;
  }
`;
