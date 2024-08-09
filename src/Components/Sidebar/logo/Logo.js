import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #f0aae7;
`;

const Logo = () => {
    return (
        <div>
            <LogoContainer>{/* <img src="" alt="" /> */}</LogoContainer>
        </div>
    );
};

export default Logo;
