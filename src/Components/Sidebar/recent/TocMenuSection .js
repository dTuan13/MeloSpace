import React from 'react';
import TocMenuItem from './TocMenuItem ';
import styled from 'styled-components';

const TocMenuSectionUl = styled.ul`
    background: #000000;
    color: white;
    li {
        padding: 10px 8px 0;
        font-size: 12px;
        color: white;
        list-style-type: none;
    }
    span {
        user-select: none;
    }
`;

const TocMenuSection = ({ title, items }) => (
    <TocMenuSectionUl>
        <li>
            <span>{title}</span>
        </li>
        {items.map((item, index) => (
            <TocMenuItem key={index} icon={item.icon}>
                {item.label}
            </TocMenuItem>
        ))}
    </TocMenuSectionUl>
);

export default TocMenuSection;
