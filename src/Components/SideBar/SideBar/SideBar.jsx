import React from "react";
import styled from "styled-components";
import { 
    FaTimes, 
    FaHome, 
    FaEnvelope, 
    FaRegSun, 
    FaUserAlt, 
    FaIdCardAlt, 
    FaRegFileAlt,
    FaRegCalendarAlt,
    FaChartBar
} from 'react-icons/fa';
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
                    <SidebarItem Icon={FaHome} Text="Home" />
                    <SidebarItem Icon={FaChartBar} Text="Statistics" />
                    <SidebarItem Icon={FaUserAlt} Text="Users" />
                    <SidebarItem Icon={FaEnvelope} Text="Mail" />
                    <SidebarItem Icon={FaRegCalendarAlt} Text="Calendar" />
                    <SidebarItem Icon={FaIdCardAlt} Text="Employees" />
                    <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
                    <SidebarItem Icon={FaRegSun} Text="Settings" />
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
    > svg {
        position: fixed;
        color: white;
        width: 25px;
        height: 25px;
        margin-top: 32px;
        margin-left: 32px;
        cursor: pointer;
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

