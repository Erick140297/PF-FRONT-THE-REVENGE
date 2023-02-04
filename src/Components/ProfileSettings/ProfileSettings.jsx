import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { updateProfile, getInfoUser } from "../../Redux/Actions";
import { BiRename } from "react-icons/bi";
import { RiDirectionFill } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import toast from "react-hot-toast";
import "./ProfileSettings.css";
import styled from "styled-components";

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
    history.push("/profile")
  };

  let capitalesDeAmerica = [
    "Mexico City",
    "Washington, D.C.",
    "Bogotá",
    "Lima",
    "Ottawa",
    "Havana",
    "San José",
    "Tegucigalpa",
    "Managua",
    "Panamá City",
    "Asunción",
    "Quito",
    "Georgetown",
    "San Salvador",
    "Roseau",
    "Bridgetown",
    "Castries",
    "Kingston",
    "Port-au-Prince",
    "Santo Domingo",
    "Nassau",
    "Basseterre",
    "Saint John's",
    "Belmopan",
    "San Juan",
    "Caracas",
  ];

  return (
    <Container>
      <ContainerAux>
        <h3>Actualizar</h3>
          <form onSubmit={handleSubmit}>
        <div>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              required
              name="name"
              value={input.name}
              onChange={(e) => handleChange(e)}
            />
            <label className="lbl-nombre">
              <span className="text-nomb">Nombre</span>
            </label>
          </form>
          <BiRename size={25} color={"white"} />
        </div>

        <div>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              required
              name="address"
              value={input.address}
              onChange={(e) => handleChange(e)}
            />
            <label className="lbl-nombre">
              <span className="text-nomb">Dirección</span>
            </label>
          </form>
          <RiDirectionFill size={25} color={"white"} />
        </div>

        <div>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              required
              id="addres_field"
              name="phone"
              value={input.phone}
              onChange={(e) => handleChange(e)}
            />
            <label className="lbl-nombre">
              <span className="text-nomb">Teléfono</span>
            </label>
          </form>
          <FiPhone size={25} color={"white"} />
        </div>

        <div>
          <form onSubmit={handleSubmit} className="form">
            <input
              list="ciudades"
              required
              name="city"
              value={input.city}
              onChange={(e) => handleChange(e)}
            />
            <label className="lbl-nombre">
              <span className="text-nomb">Ciudad</span>
              <datalist id="ciudades">
                {capitalesDeAmerica.map((el) => (
                  <option key={el} className="opt-cid">
                    {el}
                  </option>
                ))}
              </datalist>
            </label>
          </form>
          <FaCity size={25} color={"white"} />
        </div>
        <div className="containerAux">
        <Link to={'/profile'}>
          <button className="boton-neon">
            <i className="fas fa-exclamation-triangle"></i>
            <span>Volver</span>
          </button>
        </Link>
        <button className="boton-neon" type="submit" value={"Actualizar"}>
          <i className="fas fa-exclamation-triangle"></i>
          <span>Actualizar</span>
        </button>
        </div>
        </form>
      </ContainerAux>
    </Container>
  );
};

export default ProfileSettings;

const Container = styled.div`
  background-color: #212529;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding: 20px 20px 40px 50px;
  margin: 1%;
  width: 100%;
`;
const ContainerAux = styled.div`
  background-color: #30363b;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 25px 30px 10px black;
  gap: 1em;
  padding: 50px;
  height: auto;
  width: auto;
`;
