import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrder, setLoader } from "../../Redux/Actions";
import styled from "styled-components";
import Loader from "../Loader/Loader";
import { AiOutlineComment } from "react-icons/ai";
import { spread } from "axios";

const OrderDetail = () => {
  const order = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOrder(id));
  }, [dispatch]);

  return (
    <>
      {Object.entries(order).length === 0 ? (
        <Loader />
      ) : (
        <>
          <Container>
            <Chield1>
              <Text>Estado actual: </Text>
              <Text>{order.status}</Text>
            </Chield1>

            <Chield2>
              <Text>Fecha de expedición: {order.date} </Text>
            </Chield2>
            <Chield4>
              {order.cart.items?.map((el, index) => (
                <Row key={index}>
                  <TextNum key={index}>{index + 1}</TextNum>
                  <TextName key={el.name}>{el.product.name}</TextName>
                  <TextNum key={el.quantity}>{el.quantity}</TextNum>
                  <TextBrand key={el.brand}>{el.product.brand}</TextBrand>
                  <TextPrice key={el.price}>{el.product.price}</TextPrice>
                  <TextPrice key={el.brand}>
                    {el.product.price * el.quantity}
                  </TextPrice>
                  {!el.revised? (
                    <Link
                      to={`/review/${id}/${index}/${el.product._id}/${el.product.name}`}
                    >
                      <Comment />
                    </Link>
                  ):(<TextPrice>Calificado</TextPrice>)}
                </Row>
              ))}
            </Chield4>

            <Chield3>
              <TextNum>N°</TextNum>
              <TextName>Nombre</TextName>
              <TextNum>Cantidad</TextNum>
              <TextBrand>Marca</TextBrand>
              <TextPrice>Precio unitario</TextPrice>
              <TextPrice>Precio</TextPrice>
              <TextPrice>Calificar</TextPrice>
            </Chield3>

            <Chield5>
              <TextTittle>Total</TextTittle>
              <Text>${order.total}</Text>
            </Chield5>
          </Container>
        </>
      )}
    </>
  );
};

export default OrderDetail;

const Comment = styled(AiOutlineComment)`
  color: yellow;
  font-size: 40px;
`;

const Container = styled.div`
  background-color: gray;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: 2%;
  padding: 1%;
  padding-bottom: 2%;
  border-radius: 25px;
  border-radius: 25px;
  height: 100vh;
  display: grid;
`;

const Chield1 = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  text-align: justify;
  height: 100%;
  grid-area: 1 / 1 / 2 / 5;
  border-radius: 15px;
  background-color: whitesmoke;
  margin: 1%;
`;

const Chield2 = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  height: 100%;
  grid-area: 1 / 8 / 2 / 11;
  border-radius: 15px;
  background-color: whitesmoke;
  margin: 1%;
`;

const Chield3 = styled.div`
  grid-area: 2 / 1 / 3 / 11;
  border-radius: 15px;
  background-color: #323232;
  margin: 1%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Chield4 = styled.div`
  display: flex;
  flex-direction: column;
  border-style: double;
  gap: 20px;
  height: 100%;
  grid-area: 3 / 1 / 8 / 11;
  overflow-y: scroll;
  border-radius: 15px;
  background-color: #737171;
`;

const Chield5 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  grid-area: 2 / 5 / 1 / 7;
  border-radius: 15px;
  background-color: red;
  margin: 1%;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #303030;
`;
const Text = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: black;
  font-size: 30px;
`;
const TextTittle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: whitesmoke;
  font-size: 30px;
  font-weight: 700;
`;

const TextNum = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
  text-align: center;
  color: whitesmoke;
  font-size: 20px;
`;

const TextName = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");
  font-family: "Poppins", sans-serif;
  display: flex;
  text-align: start;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 100%;
  text-align: center;
  color: whitesmoke;
  font-size: 20px;
`;
const TextBrand = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100%;
  text-align: center;
  color: whitesmoke;
  font-size: 20px;
`;

const TextPrice = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
  text-align: center;
  color: whitesmoke;
  font-size: 20px;
`;

// <div>
//   <h2>Orden de compra</h2>
//   <h3>Productos: </h3>
//   {order?.cart.items.map((el, i) => {
//     if (!el || !el.product) return null;
//     return (
//       <Container key={i}>
//         <span>Artículo: {el.product.name}</span>
//       </Container>
//     );
//   })}
// </div>
