
import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser,userDisabled,deleteUser } from "../../../Redux/Actions";
import "./User.css";
import {NavLink} from "react-router-dom";
import PaginadoUsers from "../User/Paginado/Paginado";
import { Link } from "react-router-dom"

const User = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUser());
  }, []);
  
  const users = useSelector((state) => state.usersAdmin);
  console.log(users)
  
  const usersBanned = users.filter(
    (user) => user.enabled !== true
    ).length;

  const handleDisabled =  (id, enabled) => {
    // setCurrentPage(1)
    // const updatingProuduct = allProducts.find(p => p.id === id);
    let disabledUser;
    if (enabled === true) {
      disabledUser = {
        enabled: false,
      };
    } else {
      disabledUser = {
        enabled: true,
      };
    }
     dispatch(userDisabled(id, disabledUser));
     dispatch(getUser());
  };
  


  let [currentPage, setCurrentPage] = useState(1);
  let [usersPerPage, setUsersPerPage] = useState(5);
  let indexOfLastUser = currentPage * usersPerPage;
  let indexOfFirstUser = indexOfLastUser - usersPerPage;
  let currentUsers = users.slice(
    indexOfFirstUser,
    indexOfLastUser
    );
    const handleDeleteUser = (userId) => {
      if(window.confirm("Estás seguro de que quieres eliminar este usuario?"))
{      dispatch(deleteUser(userId));
}    };
    return (
      <div>
       <NavLink to="/dashboard">
        <button className="btnAbout">Volver</button>
      </NavLink>
      <div className="productContainer">
        <div className="infoConteiner">
          <div className="infoProduct">
            <div className="info">
              <h3>{users.length}</h3>
              <p>Usuarios Activos</p>
            </div>
            <div className="icon me-2">
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
            <div className="icon me-2">
              <div className="containerCheckx">
                <i class="fa-solid fa-x"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="containerInfoTable">
          <ul className="ul">
            <div className="containHeadr"> Nombre
            </div>
            <div className="containHeadr1">Apellidos
            </div>
            <div className="containHeadr1">Correo
            </div>
            <div className="containHeadr1">Role
            </div>
            <div className="containHeadr1">Estado
            </div>
            <div className="containHeadr2">Acciones
            </div>
          </ul>

          {currentUsers &&
            currentUsers.map((item) => (
              <div className="containerc">
                <div className="containCardName">
                  <p className="mt-3">
                    {" "}
                    {item.name
                      ?.split(" ")
                      .slice(0, 1)
                      .join(" ")}
                  </p>
                </div>

                <div className="containCardInfo ">
                  <p className="text-center mt-2">
                    {" "}
                    {item.name?.split(" ").slice(1).join(" ")}
                  </p>
                </div>

                <div className="containCardInfo">
                  <p className="p-user"> {item.email}</p>
                </div>

                <div className="containCardRole">
                <p > {item.admin ? "Admin" : "Cliente"}</p>
                </div>

                <div className="containCardInfo">
                  <p>{item.enabled ? "Autorizado" : "Deshabilitado"}</p>
                </div>

              
                <div className="containerActions">
                {item.enabled === true ? (
                    <span className="actionDisable">
                      <i
                        onClick={() => handleDisabled(item._id, item.enabled)}
                        className="fa-solid fa-user"
                      ></i>
                    </span>
                  ) : (
                    <span className="actionNotDisable ">
                      <i
                        onClick={() => handleDisabled(item._id, item.enabled)}
                        className="fa-solid fa-user-slash"
                      ></i>
                    </span>
                    )}
                    <span className="actionDelete">
                    <i className="actionDelete"onClick={() => handleDeleteUser(item._id)}class="fa-solid fa-trash"></i>
                    </span>
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