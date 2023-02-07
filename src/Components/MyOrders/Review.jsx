import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FaCommentDots, FaStar, FaRocket } from 'react-icons/fa'
import { Rating } from "@material-ui/lab";
import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function Review() {
  const [input, setInput] = useState({
    comentario: "",
    rating: "",
  });

  const history = useHistory();

  const { user } = useAuth0();
  const { orderId, index, productId, name } = useParams();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const addReview = async () => {
    await axios.put(
      `https://pf-back-the-revenge-production.up.railway.app/reviews`,
      {
        productId,
        userName: user.name,
        comentario: input.comentario,
        rating: input.rating,
      }
    );
  };

  const changeRevised = async () => {
    await axios.put(
      `https://pf-back-the-revenge-production.up.railway.app/revised`,
      {
        orderId,
        index,
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Producto calificado!")
    addReview();
    changeRevised()
    setInput({ comentario: "", rating: 0 });
    history.push(`/order/detail/${orderId}`);
  };

  return (
    <Container className="my-order container-sm p-3 mb-5 w-75 mt-5 bg-dark rounded text-start">
      <span className="text-center mb-1 fs-5">< FaRocket/> Producto</span>
      <hr className="text-muted mt-0 mb-0"/>
      <div className="container-sm p-3 w-75 bg-dark rounded text-center">
        <h2 className="fs-4">{name}</h2>
      </div>
      <div className="d-md-flex justify-content-md-center mb-5">
        <form className="form-control bg-dark w-75 text-center shadow border border-success p-2 border-opacity-10" onSubmit={(e) => handleSubmit(e)}>
          <Container>
            <label htmlFor=""><FaCommentDots /> Deja aquí tú comentario:</label>
            <div className="d-md-flex justify-content-md-center mb-5">
              <textarea
                name="comentario"
                className="form-control w-75 mt-3 bg-dark text-light "
                cols="10"
                rows="10"
                value={input.comentario}
                onChange={(e) => handleChange(e)}
                placeholder="Agrega tu comentario"
              ></textarea>
            </div>
            <label htmlFor="">Puntuar:</label>
            <div className="text-center mt-3 mb-3">
              <Rating
                name="rating"
                className="fs-1 text-center"
                defaultValue={0}
                onChange={(e) => handleChange(e)}
                precision={1}
                value={input.rating}
              />
            </div>
          </Container>
          <input type="submit" className="input ps-3 pe-3" />
        </form>

      </div>
    </Container>
  );
}

export default Review;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 10px;
`;
