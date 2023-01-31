import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrder, setLoader } from "../../Redux/Actions";
import styled from "styled-components";
import Loader from "../Loader/Loader";

const OrderDetail = () => {
  const order = useSelector((state) => state.order);
  const loading = useSelector((state) => state.loader);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOrder(id));
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
          <h2>Orden de compra</h2>
          <h3>Productos: </h3>
          {order?.cart.items.map((el, i) => {
            if (!el || !el.product) return null;
            return (
              <Container key={i}>
                <span>Artículo: {el.product.name}</span>
              </Container>
            );
          })}
        </div>
      )}
    </>
  );
};

export default OrderDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  border: 2px solid white;
`;
