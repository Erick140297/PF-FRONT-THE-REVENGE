import React from "react";
import { Link } from "react-router-dom";
import { AiFillAppstore } from "react-icons/ai";
import { BsCart4, BsEnvelope } from "react-icons/bs";
import "./profile.css";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { logout, user } = useAuth0();
  return (
    <div className="div">
      <h1> <AiFillAppstore /> my account</h1>
      <h1> <img className="img" src={user.picture}></img> {user.given_name} </h1>

      <Link to={"/cart"}>
      <h2> MI CARRITO <BsCart4/> </h2>
      </Link>

      <h2> account data: </h2>
      <p> fullname: {user.name}</p>
      <p> <BsEnvelope/> e-mail: {user.email}</p>
      <p> joined on: {user.updated_at}</p>

      <Link to={"/orders"}>
      <h2> MIS ORDENES </h2>
      </Link>
      
      <Link to={"/profileSettings"}>
        <button className="button"> edit profile </button>
      </Link>

      <button
        className="button"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    </div>
  );
};

export default Profile;