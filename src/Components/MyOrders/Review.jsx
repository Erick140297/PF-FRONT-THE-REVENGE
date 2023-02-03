import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Rating } from "@material-ui/lab";
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
    addReview();
    changeRevised()
    setInput({ comentario: "", rating: 0 });
    history.push(`/order/detail/${orderId}`);
  };

  return (
    <Container>
      <span>Producto: {name}</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Container>
          <label htmlFor="">Comentar:</label>
          <textarea
            name="comentario"
            cols="10"
            rows="10"
            value={input.comentario}
            onChange={(e) => handleChange(e)}
            placeholder="Agrega tu comentario"
          ></textarea>
          <label htmlFor="">Puntuar:</label>
          <Rating
            name="rating"
            defaultValue={0}
            onChange={(e) => handleChange(e)}
            precision={1}
            value={input.rating}
          />
        </Container>
        <input type="submit" />
      </form>
    </Container>
  );
}

export default Review;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;
