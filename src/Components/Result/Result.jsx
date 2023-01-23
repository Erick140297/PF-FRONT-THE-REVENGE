import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../Card/Card";

const Result = () => {
  const productsByName = useSelector((state) => state.productsByName);

  return (
    <CardsContaier>
      {productsByName?.map((el, index) => {
        return (
          <Card
            id = {el._id}
            name={el.name}
            image={el.image ? el.image.secure_url : ""}
            price={el.price}
            key={index}
          />
        );
      })}
    </CardsContaier>
  );
};

export default Result;

const CardsContaier = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: linear-gradient(184deg, #0e0f0f 0%, rgb(48, 48, 48) 76%);
`;
