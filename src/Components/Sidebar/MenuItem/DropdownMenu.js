import React, { useContext } from 'react';
import styled from 'styled-components';
import AddPlaylist from '../../AddPlaylist/AddPlaylist';
import { GlobalContext } from '../../../Context';
const DropdownContainer = styled.ul`
    display: ${({ showDropdown }) => (showDropdown ? 'block' : 'none')};
    position: absolute;
    top: 30px;
    left: 0;
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transform: translateX(-90%) translateY(0);
    width: 204px;
    list-style: none;
    padding: 0 !important;
    margin: 0;
    z-index: 1000;
`;

const DropdownItem = styled.li`
    padding: 10px 0;
    cursor: pointer;
    font-size: 14px;
    padding: 12px 8px 12px 12px;
    color: #000000;
    font-weight: 500;

    &:hover {
        background: #f0f0f0;
    }
`;

const DropdownMenu = ({ showDropdown }) => {
    const getContext = useContext(GlobalContext)
     return (
        <DropdownContainer showDropdown={showDropdown}>
            <DropdownItem
               onClick={() => {
                // e.preventDefault()

               getContext.setHidden(true)
            }} 
            >
                <a href="/#">Tạo danh sách phát mới</a>
            </DropdownItem>
            <DropdownItem
                onClick={() => {
                    // e.preventDefault()

                getContext.setHiddenAlbum(true)
                }} >
                <a href="/#">Tạo album mới</a>
            </DropdownItem>
        </DropdownContainer>
)}


export default DropdownMenu
