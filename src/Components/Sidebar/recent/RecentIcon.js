import React, { useState } from 'react';
import TocButton from './TocButton ';
import TocMenu from './TocMenu';
import styled from 'styled-components';

const RecentContain = styled.div`
    color: #5a5858;
    height: 35px;
    display: flex;
    align-items: center;
    margin-right: 20px;
    .recent {
        font-size: 13px !important;
    }

    .recent:hover {
        color: #000000;
    }
    span {
        font-size: 13px;
        font-weight: 500;
        color: #5a5858;
    }
`;

const RecentIcon = () => {
    const [tocIcon, setTocIcon] = useState(false);

    const handleTocIcon = () => {
        setTocIcon(!tocIcon);
    };

    return (
        <RecentContain>
            <div className="recent">
                <span>Gần đây</span>
                <TocButton handleClick={handleTocIcon} />
                <TocMenu visible={tocIcon} />
            </div>
        </RecentContain>
    );
};

export default RecentIcon;
