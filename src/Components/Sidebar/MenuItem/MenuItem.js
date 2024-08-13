import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import AddIcon from './AddIcon';

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    svg {
        height: 24px !important;
        width: 24px !important;
    }
    .menu_item:last-child {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }

    .menu_item--container {
        height: 48px;
        text-align: center;
        align-items: center;
        display: flex;
    }

    .menu_link {
        text-decoration: none;
        display: flex;
        gap: 10px;
        margin-left: 5px;
        color: #161823;
        font-weight: bold;
        font-size: 16px;
    }

    .active {
        border-left: 4px solid green;
        padding: 0 20px 0 45px;
        font-weight: 700;
        color: #000000;
        transform: translateX(-50px);
        height: 40px;
        display: flex;
        align-items: center;
        color: #c21c1c;
    }
`;

const MenuItem = ({ title, url, icon, isActive, index }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [hovering, setHovering] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown((prev) => !prev);
    };
    return (
        <MenuContainer>
            <li className="menu_item" key={index}>
                <div className="menu_item--container">
                    <NavLink to={url} className={isActive ? 'menu_link active' : 'menu_link'}>
                        {icon}
                        {title}
                    </NavLink>
                </div>
                {title === 'Thư viện' && (
                    <AddIcon
                        hovering={hovering}
                        toggleDropdown={toggleDropdown}
                        setHovering={setHovering}
                        showDropdown={showDropdown}
                    />
                )}
            </li>
        </MenuContainer>
    );
};

export default MenuItem;
