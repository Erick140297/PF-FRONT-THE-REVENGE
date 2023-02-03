import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMyOrders, setLoader } from "../../Redux/Actions";
import styled from "styled-components";
import Loader from "../Loader/Loader";

const MyOrders = () => {
  const myOrders = useSelector((state) => state.myOrders);
  const loading = useSelector((state) => state.loader);

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
        <div>
          {myOrders.orders?.map((el, i) => {
            return (
              <Container key={i}>
                <span>Orden: {i + 1}</span>
                <span>Estado: {el.status}</span>
                <span>Fecha: {el.date}</span>
                <span>Total: $ {el.total}</span>
                <Link to={`/order/detail/${el._id}`}>Más información</Link>
              </Container>
            );
          })}
        </div>
      )}
    </>
  );
};

export default MyOrders;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  border: 2px solid white;
`;
