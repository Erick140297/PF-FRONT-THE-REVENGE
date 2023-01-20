import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
import { getProductsByName } from "../../../Redux/Actions";

const SearchBar = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.length !== 0) {
      dispatch(getProductsByName(input))
      setInput("")
      history.push("/result");
    } else {
      toast.error("Agrega una categoria válida");
      // toast.success('Successfully toasted!')
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <FormContainer onSubmit={(e) => handleSubmit(e)}>
        <InputTex type="text" onChange={(e) => handleChange(e)} value={input} />
        <InputSubmit>
          <BsSearch />
        </InputSubmit>
      </FormContainer>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default SearchBar;

const FormContainer = styled.form`
  display: flex;
  background: #181a1b;
  border: 2px solid white;
  border-radius: 5px;
  padding: 5px;
`;

const InputTex = styled.input`
  background: #181a1b;
  border: #181a1b;
  color: #7230ff;
  font-size: 20px;
  width: 450px;
  height: 35px;
  margin-right: 5px;
`;
const InputSubmit = styled.button`
  background: #7230ff;
  border: 0;
  height: 35px;
  width: 30px;
  border-radius: 5px;
  &:hover {
    background: #7230ff;
  }
`;
