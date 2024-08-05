import React from 'react';
import styled from 'styled-components';
import QueueIcon from '@mui/icons-material/Queue';
import DropdownMenu from './DropdownMenu';

const AddIconContainer = styled.div`
    position: relative;
    height: 22px;
    width: 22px;
    display: flex;
    align-items: center;
    margin-right: 20px;
`;

const AddButton = styled.button`
    border: none;
    outline: none;
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    height: 24px;
    width: 24px;
    color: #666666;
    &::after {
        content: 'Tạo danh sách phát mới';
        position: absolute;
        left: 50%;
        transform: translateX(-50%) translateY(-110%);
        top: 0;
        background: #333333;
        color: #cccccc;
        padding: 5px;
        border-radius: 3px;
        white-space: nowrap;
        opacity: ${({ hovering }) => (hovering ? '1' : '0')};
        visibility: ${({ hovering }) => (hovering ? 'visible' : 'hidden')};
        transition: opacity 0.3s, visibility 0.3s;
        z-index: 1000;
        font-weight: 500 !important;
        font-size: 12px;
    }

    &:hover {
        color: #000000;
    }
`;

const AddIcon = ({ toggleDropdown, setHovering, hovering, showDropdown }) => (
    <AddIconContainer>
        <AddButton
            onClick={toggleDropdown}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            hovering={hovering}
        >
            <QueueIcon />
        </AddButton>
        <DropdownMenu showDropdown={showDropdown} />
    </AddIconContainer>
);

export default AddIcon;
