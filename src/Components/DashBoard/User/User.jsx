import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser,userDisabled } from "../../../Redux/Actions";
import "./User.css";
import {NavLink} from "react-router-dom";
import PaginadoUsers from "../User/Paginado/Paginado";


const User = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUser());
  }, []);
  
  const users = useSelector((state) => state.usersAdmin);
  
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

  console.log("Useeeeeer", users)

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
      <div className="productContainer">
        <div className="infoConteiner">
          <div className="infoProduct">
            <div className="info-card-user">
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
            <div className="info-card-user">
              <h3></h3>
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
            <div >
              <li>Nombre</li>
            </div>
            <div >
              <li>Apellidos</li>
            </div>
            <div>
              <li>Correo</li>
            </div>
            <div >
              <li>Role</li>
            </div>
            <div >
              <li>Estatus</li>
            </div>
            <div >
              <li>Acciones</li>
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
                <p > {item.admin ? "Admin" : "Cliente"}</p>
                </div>

                <div className="containCardInfo">
                  <p>holaa</p>
                </div>

               
                <div className="containCardInfo">
                  {item.status === "Autorizado" ? (
                    <i 
                      onClick={() => handleDisabled(item.email, item.status)}
                      className="actionDisable fa-solid fa-user-slash"
                    ></i>
                  ) : (
                    <i
                      onClick={() => handleDisabled(item.email, item.status)}
                      className=" actionNotDisable fa-solid fa-user"
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
