import React from 'react';
import styled from 'styled-components';

const TocMenuItemLi = styled.li`
    padding: 10px 12px 0 16px;
    font-size: 12px;
    display: flex;
    gap: 5px;
    list-style-type: none;
    padding-left: 18px !important;
    svg {
        height: 20px !important;
        width: 20px !important;
    }
    span {
        height: 20px;
        width: 20px;
    }

    button {
        color: white;
        font-weight: 400;
    }
`;

const TocMenuItem = ({ children, icon }) => (
    <TocMenuItemLi>
        {icon && <span>{icon}</span>}
        <button>{children}</button>
    </TocMenuItemLi>
);

export default TocMenuItem;
