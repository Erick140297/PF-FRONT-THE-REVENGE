import React from "react";
import styled from "styled-components";
import { 
    FaTimes, 
} from 'react-icons/fa';
import { GiAbstract029 
} from "react-icons/gi";
import SidebarItem from "../SideBarItem";


const Sidebar = ({active}) => {

    const closeSidebar = () => {
        active(false)
    }

    return (
        <>
            <Container sidebar={active}>
                <FaTimes onClick={closeSidebar} />  
                <Content>
                    <h4>CATEGORY</h4>
                    <SidebarItem Icon={GiAbstract029} Text="COMPONENTES DE PC" />
                    <SidebarItem Icon={GiAbstract029} Text="MANTENIMIENTO" />
                    <SidebarItem Icon={GiAbstract029} Text="PERIFÉRICOS" />
                    <SidebarItem Icon={GiAbstract029} Text="LAPTOPS" />
                    <SidebarItem Icon={GiAbstract029} Text="DESTACADOS" />
                </Content>
            </Container>
        </>
    )
}

export default Sidebar;

const Container = styled.div`
    background-color: #000000;
    position: fixed;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 300px;
    left: ${props => props.sidebar ? '0' : '-100%'};
    animation: showSidebar .4s;
    z-index: 99;
    > svg {
        position: fixed;
        color: white;
        width: 25px;
        height: 25px;
        margin-top: 32px;
        margin-left: 32px;
        cursor: pointer;
    }

    h4 {
        padding-left: 100px;
        font-size: 18px;
        font-weight: bolder;
        font-family: 'Poppins', sans-serif;
        margin-bottom: 20px;
    }
    @keyframes showSidebar {
        from {
        opacity: 0;
        width: 0;
        }
        to {
        opacity: 0;
        width: 300px;
        }
    }
`;

const Content = styled.div`
    margin-top: 100px;
`;

