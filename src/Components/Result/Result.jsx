import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import filter from "./filter";
import ChatBot from "../ChatBot/ChatBot";

const Result = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsFiltrados);
  const [filters, setFilters] = useState({
    brand: "",
    price: "",
  });
  const filtrandoProductos = filter(products, filters);
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const uniqueBrands = new Set();
  products.forEach((product) => uniqueBrands.add(product.brand));
  const options = Array.from(uniqueBrands);

  useEffect(() => {
    return () => {
      // dispatch(cleanResult())
    };
  }, [dispatch, filtrandoProductos]);

  return (
    <>
      {products.length === 0 ? (
        <Loader />
      ) : (
        <>
          <ChatBot />
          {products[0].message ? (
            <NotFound>No se encontrarón resultados</NotFound>
          ) : (
            <>
              <div className="row g-3 pb-0 mt-2 mb-2 ">
                <div className="col-auto">
                  <div className="form-floating text-center">
                    <select
                      className="form-select-md border p-3 mb-2 bg-dark text-light rounded"
                      id="floatingSelectGrid"
                      onChange={(e) => handleChange(e)}
                      name="brand"
                    >
                      <option value="">Marca</option>
                      {options.map((e, i) => (
                        <option key={i} value={e}>
                          {e}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="form-floating pb-0 text-center">
                    <select
                      className="form-select-md border border-1 shadow-sm p-3 mb-6 bg-dark text-light rounded"
                      id="floatingSelectGrid"
                      onChange={(e) => handleChange(e)}
                      name="price"
                    >
                      <option value="">Precio</option>
                      <option value="highest">Más alto</option>
                      <option value="lowest">Más bajo</option>
                    </select>
                  </div>
                </div>
              </div>
              <CardsContaier>
                {filtrandoProductos?.map((el, index) => {
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
            </>
          )}
        </>
      )}
    </>
  );
};

export default Result;

const CardsContaier = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: linear-gradient(184deg, #0e0f0f 0%, rgb(48, 48, 48) 76%);
  margin-bottom: 2em;
`;

const NotFound = styled.h1`
  color: white;
`