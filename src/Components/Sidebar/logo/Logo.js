import React from 'react';
import styled from 'styled-components';
import img from './meloospace.png';
const LogoContainer = styled.div`
    width: 100%;
    height: 70px;
`;

const Logo = () => {
    return (
        <div>
            <LogoContainer><img src={img} alt="" /></LogoContainer>
        </div>
    );
};

export default Logo;
