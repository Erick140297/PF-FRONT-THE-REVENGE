import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrder } from "../../Redux/Actions";
import styled from "styled-components";

const OrderDetail = () => {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const { id } = useParams();

console.log(order)

  useEffect(() => {
    dispatch(getOrder(id));
  }, [dispatch]);

  return (
    <div>
      <h2>Orden de compra</h2>
      <h3>Productos: </h3>
      {order.cart.items?.map((el, i) => {
        return (
          <Container key={i}>
            <span>Artículo: {el.product.name}</span>
          </Container>
        );
      })}
    </div>
  );
};

export default OrderDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  border: 2px solid white;
`;
