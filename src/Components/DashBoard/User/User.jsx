import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../Redux/Actions";
import "./User.css";
import {NavLink} from "react-router-dom";
import PaginadoUsers from "../User/Paginado/Paginado";


const User = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUser());
  }, []);
  
  const users = useSelector((state) => state.usersAdmin);
  console.log(users)
  
  const usersBanned = users.filter(
    (user) => user.status !== "Autorizado"
    ).length;
    
    const handleDisabled = async (id, status) => {
      
        let disabledUser;
        if (status === "Autorizado") {
      disabledUser = {
        status: false,
      };
    } else {
      disabledUser = {
        status: "Autorizado",
      };
    }
     await dispatch(userDisabled(id, disabledUser));
     await dispatch(getUsersAdmin());
  };



  let [currentPage, setCurrentPage] = useState(1);
  let [usersPerPage, setUsersPerPage] = useState(5);
  let indexOfLastUser = currentPage * usersPerPage;
  let indexOfFirstUser = indexOfLastUser - usersPerPage;
  let currentUsers = users.slice(
    indexOfFirstUser,
    indexOfLastUser
    );
    return (
      <div className="containerAll">
      <NavLink to="/dashboard"><botton>atras</botton></NavLink>
      <div className="productContainer">
        <div className="infoConteiner">
          <div className="infoProduct">
            <div className="info">
              <h3>{users.length}</h3>
              <p>Usuarios Activos</p>
            </div>
            <div className="icon">
              <div className="containerCheckv">
                <i class="fa-solid fa-check"></i>
              </div>
            </div>
          </div>

          <div className="infoProduct">
            <div className="info">
              <h3>{usersBanned}</h3>
              <p>Usuarios Deshabilitados</p>
            </div>
            <div className="icon">
              <div className="containerCheckx">
                <i class="fa-solid fa-x"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="containerInfoTable">
          <ul className="ul">
            <div className="headerMove">
              <li className="headerItem">Nombre</li>
            </div>
            <div className="headerMove">
              <li className="headerItem">Apellidos</li>
            </div>
            <div className="headerMovemail">
              <li className="headerItem">Correo</li>
            </div>
            <div className="headerMove">
              <li className="headerItem">Role</li>
            </div>
            <div className="headerMove">
              <li className="headerItem">Estatus</li>
            </div>
            <div className="headerMove">
              <li className="headerItem">Creado</li>
            </div>
            <div className="headerMove">
              <li className="headerItem">Acciones</li>
            </div>
          </ul>

          {currentUsers &&
            currentUsers.map((item) => (
              <div className="containerc">
                <div className="containCardInfo">
                  <p>
                    {" "}
                    {item.name
                      ?.split(" ")
                      .slice(0, 1)
                      .join(" ")}
                  </p>
                </div>

                <div className="containCardInfo">
                  <p>
                    {" "}
                    {item.name?.split(" ").slice(1).join(" ")}
                  </p>
                </div>

                <div className="containCardInfo">
                  <p className="p-user"> {item.email}</p>
                </div>

                <div className="containCardInfo">
                <p > {item.admin ? "Es administrador" : "No es administrador"}</p>
                </div>

                <div className="containCardInfo">
                  <p>{}</p>
                </div>

                <div className="containCardInfo">
                  
                </div>
                <div className="containCardInfo">
                  {item.status === "Autorizado" ? (
                    <i
                      onClick={() => handleDisabled(item.email, item.status)}
                      className="fa-solid fa-user-slash"
                    ></i>
                  ) : (
                    <i
                      onClick={() => handleDisabled(item.email, item.status)}
                      className="fa-solid fa-user"
                    ></i>
                  )}
                </div>
              </div>
            ))}
        </div>
         <div className="containerCreated">
          <NavLink className="link" to={`/admin/createAdmin`}>
            <div className="containerCreate">

              <i class="fa-solid fa-plus"></i>

            </div>
            
          </NavLink>
          </div>
        <div className="containerPaginate">
          <PaginadoUsers
            usersPerPage={usersPerPage}
            allUsers={users.length}
            paginado={setCurrentPage} />
        </div> 
      </div>
    </div>
  );
};

export default User;
