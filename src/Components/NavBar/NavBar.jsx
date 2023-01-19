import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <>
      <NavContainer>
        <h2>Galaxia Tech</h2>
        <form action="">
          <input type="text" />
          <input type="submit" />
        </form>
        <div>
          <button>Login</button>
          <span>🛒{0}</span>
        </div>
      </NavContainer>
    </>
  );
};

export default NavBar;

const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
  }
  span{
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
