import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../SideBar/SideBar';
import styled from 'styled-components';


const Header = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSiderbar = () => setSidebar(!sidebar)

    return (
        <>
            <Container>
            <FaBars onClick={showSiderbar} />
            {sidebar && <Sidebar active={setSidebar} />}
            </Container>
        </>
    )
}

export default Header


const Container = styled.div`
    height: 50px;
    display: flex;
    background-color: #090b0f; 
    box-shadow: 0 0 20px 3px;
    > svg {
        position: fixed;
        color: white;
        width: 15px;
        height: 15px;
        margin-top: 18px;
        margin-left: 32px;
        cursor: pointer;
    }
`;