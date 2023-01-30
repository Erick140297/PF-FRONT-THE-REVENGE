import React from "react";
import { Link } from "react-router-dom";
import { AiFillAppstore, AiOutlineShoppingCart } from "react-icons/ai";
import { BsCart4, BsEnvelope } from "react-icons/bs";
import "./Profile.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getInfoUser } from "../../Redux/Actions";
import styled from "styled-components";
import { FaUserCog, FaUserEdit, FaUserMinus, FaUsersCog } from "react-icons/fa";

const Profile = () => {
  const dispatch = useDispatch();

  const { logout, user } = useAuth0();
  const info = useSelector((state) => state.Admin);

  useEffect(() => {
    dispatch(getInfoUser(user.email));
  }, []);

  console.log("infoDb ====>", info);
  console.log("user=====>", user);
  return (
    <Container>
      <ContainerOne>
        <Image style={{ backgroundImage: `url("${user.picture}")` }} />
        <Text>Hola {info.name}</Text>
      </ContainerOne>
      <ContainerTwo>
        <Text>Tu información:</Text>
        <Info>
          Nombre:
          <TextMin>{info.name}</TextMin>
        </Info>

        <Info>
          Email:
          <TextMin>{info.email}</TextMin>
        </Info>

        <Info>
          Dirección:
          <TextMin>{user.address ? user.address : "Agregar"}</TextMin>
        </Info>

        <Info>
          Telefóno:
          <TextMin>{user.phone ? user.phone : "Agregar"}</TextMin>
        </Info>
      </ContainerTwo>
      <ContainerThree>
        <Link to={"/cart"}>
          <BtnCart>
            Carrito
            <AiOutlineShoppingCart size={30} />
          </BtnCart>
        </Link>

        <Link to={"/profileSettings"}>
          <BtnCart>
            Edit Info
            <FaUserEdit size={30} />
          </BtnCart>
        </Link>
        {info.admin ? (
          <Link to={"/dashboard"} style={{ color: "black" }}>
            <BtnCart>
              Administración
              <FaUsersCog size={30} />
            </BtnCart>
          </Link>
        ) : null}
        <BtnCart
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
          }
        >
          Salir
          <FaUserMinus size={30} />
        </BtnCart>
      </ContainerThree>
      {/* 

      */}
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
  font-family: "Poppins", sans-serif;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  flex-direction: row;
  border-radius: 25px;
  background-color: #282c34;
  border: solid 5px whitesmoke;
  margin-bottom: 20px;
  margin-top: 20px;
  height: 90vh;
  padding: 10px;
`;
const ContainerOne = styled.div`
  border-radius: 25px;

  /* background-color: #33e32a; */
  align-items: center;
  display: flex;
  grid-column: 1 / 3;
  grid-row: 1;
  padding-top: 30px;
  padding: 20px;
  height: 100%;
  gap: 15px;
`;
const ContainerTwo = styled.div`
  border-radius: 25px 0px 0px 25px;
  /* background-color: #393838; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  grid-column: 1 / 3;
  grid-row: 2 / 5;
  padding-bottom: 20px;
`;
const ContainerThree = styled.div`
  border-radius: 25px 25px 25px 0px;

  /* background-color: #393838; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10%;
  gap: 15px;
  grid-column: 3;
  grid-row: 1/5;
`;

const Image = styled.img`
  width: 110px;
  height: 110px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-radius: 10px;
`;

const Text = styled.div`
  /* background-color: whitesmoke; */
  font-size: 40px;
  font-weight: 700;
  color: whitesmoke;
  display: flex;
  text-align: start;
  justify-content: space-around;
`;

const TextMin = styled.div`
  /* background-color: whitesmoke; */
  font-size: 20px;

  display: flex;
  justify-content: start;
  align-items: center;
`;

const Info = styled.div`
  background-color: #494a4b;
  display: flex;
  color: whitesmoke;
  font-weight: 500;
  margin: 0 5% 0 5%;
  padding: 1% 5% 1% 5%;
  border-radius: 25px;
  border: solid 3px #01f623;
  box-shadow: 0px 0px 10px 1px #01f623;
  font-size: 20px;
  justify-content: space-between;
`;

// const DivBtns = styled.div`
//   background-color: purple;
//   display: flex;
//   width: 100%;
//   margin: 10%;
//   flex-direction: column;
//   justify-content: space-around;
// `

const BtnCart = styled.button`
  background-color: gray;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  border: 1px solid transparent;
  color: black;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 1000;
  box-shadow: 0px 0px 10px 5px #c101f6;
  width: 100%;
  height: 60px;
  transition: 0.3s;
`;
