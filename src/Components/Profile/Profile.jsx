import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { logout, user  } = useAuth0();
  console.log(user)
  return (
    <div>
      <p>Hola {user.name}</p>
      <button
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
