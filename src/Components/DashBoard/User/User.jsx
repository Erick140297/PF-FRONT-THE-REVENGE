
import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser,userDisabled } from "../../../Redux/Actions";
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
              <li className="headerItem">Estado</li>
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
                <p > {item.admin ? "Admin" : "Cliente"}</p>
                </div>

                <div className="containCardInfo">
                  <p>{item.enabled ? "Autorizado" : "Deshabilitado"}</p>
                </div>

              
                <div className="containCardInfo">
                {item.enabled === true ? (
                    <button className="actionDisable">
                      <i
                        onClick={() => handleDisabled(item._id, item.enabled)}
                        className="fa-solid fa-user"
                      ></i>
                    </button>
                  ) : (
                    <button className="actionNotDisable">
                      <i
                        onClick={() => handleDisabled(item._id, item.enabled)}
                        className="fa-solid fa-user-slash"
                      ></i>
                    </button>
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