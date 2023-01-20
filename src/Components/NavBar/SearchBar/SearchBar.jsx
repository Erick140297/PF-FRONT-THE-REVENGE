import React, {useState} from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {

  const [input, setInput] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("submit")
  }

  return (
    <>
      <FormContainer onSubmit={(e)=>handleSubmit(e)}>
        <InputTex type="text" />
        <InputSubmit>
          <BsSearch />
        </InputSubmit>
      </FormContainer>
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
  &:hover{
    background:#7230ff;
  }
`;
