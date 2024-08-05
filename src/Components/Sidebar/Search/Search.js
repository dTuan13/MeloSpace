import React, { forwardRef } from 'react';
import styled from 'styled-components';

const SearchStyle = styled.div`
    height: 24px;
    width: ${({ showinput }) => (showinput ? '180px' : '0')};
    display: ${({ showinput }) => (showinput ? 'block' : 'none')};
    padding: ${({ showinput }) => (showinput ? '0 10px 0 24px' : '0')};
    transition: width 3s ease-in-out;
    transform: translateX(4px) translateY(1px);

    input {
        border: 1px groove #c21c1c;
        padding-left: 26px;
        font-size: 14px;
        outline: none;
        width: 180px;
        border-radius: 15px;
        height: 100%;
        padding-right: 10px;
        color: #5c5c5c;
    }
`;
const Search = forwardRef(({ showinput }, ref) => {
    // console.log("showinput value:", showinput);
    return (
        <SearchStyle showinput={showinput}>
            <input type="text" placeholder="Search" ref={ref} />
        </SearchStyle>
    );
});
export default Search;
