import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { cleanResult } from "../../Redux/Actions";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";

const Result = () => {
  const dispatch = useDispatch();
  const productsByName = useSelector((state) => state.productsByName);
  console.log(productsByName);
  useEffect(() => {
    return () => {
      // dispatch(cleanResult())
    };
  }, [dispatch]);

  return (
    <>
      {productsByName.length === 0 ? (
       <Loader/>
      ) : (
        <CardsContaier>
          {productsByName?.map((el, index) => {
            return (
              <Card
                id={el._id}
                name={el.name}
                image={el.image ? el.image.secure_url : ""}
                price={el.price}
                key={index}
              />
            );
          })}
        </CardsContaier>
      )}
    </>
  );

};

export default Result;

const CardsContaier = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: linear-gradient(184deg, #0e0f0f 0%, rgb(48, 48, 48) 76%);
`;
