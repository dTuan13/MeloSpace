import React from "react";
import styled from "styled-components";

const DropdownContainer = styled.ul`
  display: ${({ showDropdown }) => (showDropdown ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transform: translateX(-90%) translateY(0);
  width: 240px;
  list-style: none;
  padding: 4px;
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

const DropdownMenu = ({ showDropdown }) => (
  <DropdownContainer showDropdown={showDropdown}>
    <DropdownItem>
      <a href="/#">Tạo danh sách phát mới</a>
    </DropdownItem>
    <DropdownItem>
      <a href="/#">Tạo thư mục danh sách phát</a>
    </DropdownItem>
  </DropdownContainer>
);

export default DropdownMenu;
