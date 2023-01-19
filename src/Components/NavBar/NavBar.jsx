import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar/SearchBar";

const NavBar = () => {
  return (
    <>
      <NavContainer>
        <ContainerLogo >
          <img
            src="https://res.cloudinary.com/dfaxzahb0/image/upload/v1674156994/Products/GT_onvscx.png"
            alt="Logo"
          />
          <h2>Galaxia Tech</h2>
        </ContainerLogo>
        <SearchBar/>
          <span>Mi cuenta</span>
          <span>🛒 Mi carrito {0}</span>
      </NavContainer>
    </>
  );
};

export default NavBar;

const NavContainer = styled.nav`
  h2 {
    color: #7230FF;
    font-weight: 600;
  }
  span {
    color: white;
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
  h2{
    margin-left: 10px;
  }
`

const Count = styled.div`
  
`

const Cart = styled.div``