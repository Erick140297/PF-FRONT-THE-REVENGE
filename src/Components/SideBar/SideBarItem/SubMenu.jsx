import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getProductsByName, getProductsBySubCategory } from "../../../Redux/Actions";
import toast, { Toaster } from "react-hot-toast";
import { toggleSideBar } from '../../../Redux/Actions';




const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 16px;

    &:hover {
        transition: 300ms;
        background: #252831;
        border-left: 4px solid #632ce4;
        cursor: pointer;
        color: #632ce4;
    }
    `;

    const SidebarLabel = styled.span`
    margin-left: 16px;
    `;

    const DropdownLink = styled(Link)`
    background: #291f36;
    height: 30px;
    padding-left: 3rem;
    display: flex;
    font-family: 'Poppins', sans-serif;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 14px;

    &:hover {
        transition: 500ms;
        background: #632ce4;
        cursor: pointer;
        color: #f5f5f5;
        
    }
    `;

    const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const [input, setInput] = useState("");
    const sidebar = useSelector((state) => state.sideBar);
    
    const showSubnav = () => setSubnav(!subnav);
    
    const dispatch = useDispatch()
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.length !== 0) {
        dispatch(getProductsBySubCategory(input.innerText))
        dispatch(toggleSideBar())
        setInput("")
        history.push("/result");
        
        } else {
        toast.error("Error");
        // toast.success('Successfully toasted!')
        }
    };

    const handleChange = (e) => {
        setInput(e.target);
    };

    return (
        <>
        <SidebarLink to={history.location} onClick={item.subNav && showSubnav}>
            <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
            </div>
            <div>
            {item.subNav && subnav
                ? item.iconOpened
                : item.subNav
                ? item.iconClosed
                : null}
            </div>
        </SidebarLink>
        {subnav &&
            item.subNav.map((item, index) => {
            return (
                <DropdownLink to='' key={index} onClick={(e) => handleSubmit(e)}>
                {item.icon}
                <SidebarLabel onMouseDownCapture={(e) => handleChange(e)} /* onChangeCapture={(e) => handleChange(e)} */ /* value={item.title} */>{item.title}</SidebarLabel>
                </DropdownLink>
            );
            })}
        </>
    );
};

export default SubMenu;
