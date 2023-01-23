import React from "react";
import { Link } from "react-router-dom";
import { AiFillAppstore } from "react-icons/ai";
import "./profile.css";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { logout, user } = useAuth0();
  console.log(user);
  return (
    <div className="div">
      <h1>
        {" "}
        <AiFillAppstore /> my account{" "}
      </h1>
      <img src={user.picture}></img>
      <h1> welcome back, {user.given_name} </h1>

      <h2> account data: </h2>
      <p> nickname: {user.name}</p>
      <p> e-mail: {user.email}</p>

      <h3> personal information: </h3>
      <p> address: {user.address}</p>
      <p> birthdate: {user.birthdate}</p>
      <p> phone_number: {user.phone_number}</p>

      <Link to={"/user"} style={{ textDecoration: "none", color: "black" }}>
        <button className="button"> Modify my addresses </button>
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
