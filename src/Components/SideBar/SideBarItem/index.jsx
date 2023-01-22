import React from "react";
import styled from "styled-components";

const SidebarItem = ({Icon, Text}) => {
    return (
        <>
            <Container>
                <Icon />
                {Text}
            </Container>
        </>
    )
}

export default SidebarItem


const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #090b0f; 
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    color: white;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    margin: 0 15px 20px;
    > svg {
        margin: 0 20px;
    }
    &:hover {
        background-color: black;
        transition: 500ms;
        box-shadow: #7230ff 0px 5px 15px;
    }
`;