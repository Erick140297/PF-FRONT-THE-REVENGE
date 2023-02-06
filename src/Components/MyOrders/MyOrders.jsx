import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMyOrders, setLoader } from "../../Redux/Actions";
import styled from "styled-components";
import Loader from "../Loader/Loader";
import { useAuth0 } from "@auth0/auth0-react";
import { FaHandPointRight, FaHourglassHalf, FaRegCalendarAlt, FaChevronLeft } from 'react-icons/fa'
import './myOrder.css'


const MyOrders = () => {
  const myOrders = useSelector((state) => state.myOrders);
  const loading = useSelector((state) => state.loader);
  const history = useHistory();
  const { user } = useAuth0();


  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getMyOrders(userId));
    return () => {
      dispatch(setLoader());
    };
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
        <button type="button" className="btn btn-dark fs-5 position-absolute top-5 start-2 " onClick={() => history.push("/profile")}>
          <FaChevronLeft/>
        </button>
        <h1 className="my-order container-sm p-3 mb-5 mt-5 bg-dark rounded text-center w-75 mt-4 text-center text-light fs-3"><FaHandPointRight /> Hola {user.given_name}, estas son tus ordenes!</h1>
        <div className="my-order container-sm p-3 mb-5 mt-2 bg-dark rounded text-center w-75 text-center text-light ">
          <div className="container-sm shadow-lg p-3 mb-5 mt-4 bg-dark rounded text-start w-50">
            {myOrders.orders?.map((el, i) => {
              return (
                <div className="my-order2 container-sm p-3 mb-3 mt-4 bg-dark rounded text-start">
                  <Container key={i}>
                    <span className="ms-2 mt-2 mb-2">Orden: {i + 1}</span>
                    <span className="ms-3"><FaHourglassHalf /> Estado: {el.status}</span>
                    <span className="ms-3"><FaRegCalendarAlt /> Fecha: {el.date}</span>
                    <hr />
                    <div className="container bg-dark text-center">
                      <div className="row">
                        <div className="col mt-2 ">
                          <span className="col">Total: $ {el.total}</span>
                        </div>
                        <div className="col mb-2 border">
                          <Link to={`/order/detail/${el._id}`}>Más información</Link>
                        </div>
                      </div>
                    </div>
                  </Container>
                </div>
              );
            })}
          </div>
        </div>
        </>
      )}
    </>
  );
};

export default MyOrders;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  border: 1px solid white;
`;
