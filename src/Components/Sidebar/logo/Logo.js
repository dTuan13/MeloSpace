import React from 'react';
import styled from 'styled-components';
import img from './meloospace.png';
const LogoContainer = styled.div`
    width: 100%;
    height: 70px;
    justify-content: center;
    display: flex;
    overflow: 'hidden';
    img{
        width: 90%;
    }
`;

const Logo = () => {
    return (
        <div>
            <LogoContainer><img src={img} alt="" /></LogoContainer>
        </div>
    );
};

export default Logo;
