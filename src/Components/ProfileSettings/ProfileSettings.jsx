import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { updateProfile, getInfoUser } from "../../Redux/Actions";
import toast from "react-hot-toast";
import "./ProfileSettings.css";

const ProfileSettings = () => {
  const info = useSelector((state) => state.Admin);
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, isAuthenticated } = useAuth0();
  const [input, setInput] = useState({
    name: "",
    city: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getInfoUser(user.email));
      setInput({
        name: info.name,
        city: info.city,
        address: info.address,
        phone: info.phone,
      });
    }
  }, [dispatch]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(info._id, input));
    setInput({
      name: "",
      city: "",
      address: "",
      phone: "",
    });
    dispatch(getInfoUser(user.email));
    toast.success("Perfil actualizado");
  };

  return (
    <div className="div">
      <h2> personal information: </h2>
      <form onSubmit={handleSubmit}>
        <div className="form=group">
          <label> Nombre: </label>
          <input
            type="text"
            id="name_field"
            className="form-control"
            name="name"
            value={input.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form=group">
          <label htmlFor="email_field"> Ciudad: </label>
          <input
            type="text"
            id="city"
            className="form-control"
            name="city"
            value={input.city}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="">
          <label> Dirección: </label>
          <input
            type="text"
            id="city"
            className="form-control"
            name="address"
            value={input.address}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="form=group">
          <label htmlFor="addres_field"> Telefóno: </label>
          <input
            type="text"
            id="addres_field"
            className="form-control"
            name="phone"
            value={input.phone}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <input
          type="submit"
          className="btn update-btn btn-block mt-4 mb-3"
          value={"Actualizar"}
        />
      </form>
      <Link to={"/profile"}>
        <button className="button"> go back </button>
      </Link>
    </div>
  );
};

export default ProfileSettings;
