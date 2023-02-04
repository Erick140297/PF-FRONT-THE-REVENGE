import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../SideBar/SidebarData';
import SubMenu from '../SideBarItem/SubMenu';
import { IconContext } from 'react-icons/lib';
import { toggleSideBar } from '../../../Redux/Actions';

const Nav = styled.div`
    background: #0b0b0e;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    margin-bottom: 0.2rem;
    font-size: 1.5rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SidebarNav = styled.nav`
    background: #0b0b0e;
    width: 268px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
`;

const SidebarWrap = styled.div`
    width: 100%;
    h4 {
        padding-left: 90px;
        color: #888383;
        font-size: 18px;
        font-weight: bolder;
        font-family: 'Poppins', sans-serif;
        margin-bottom: 25px;
        margin-top: 20px;
    }
`;

const Header = () => {
    const sidebar = useSelector((state) => state.sideBar);
    const dispatch = useDispatch();


    const showSidebar = () => dispatch(toggleSideBar())

    return (
    <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
            <NavIcon to='#'>
                <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
            </Nav>
            <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
                <NavIcon to='#'>
                <AiIcons.AiOutlineClose onClick={showSidebar} />
                </NavIcon>
                <h4>Categorias</h4>
                {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index}/>;
                })}
            </SidebarWrap>
            </SidebarNav>
        </IconContext.Provider>
        </>
    );
};

export default Header;