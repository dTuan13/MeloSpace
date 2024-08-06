import React from 'react';
import styled from 'styled-components';

const PlayListContainer = styled.div`
    font-size: 15px;
    height: 60px;

    .playList_item {
        padding-left: 5px;
        display: flex;
        flex-direction: row;
        height: 100%;
        cursor: pointer;
        align-items: center;
    }
    .item_img {
        height: 50px;
        width: 50px;
        padding: 2px;
    }
    .item_img img {
        width: 45px;
        border-radius: 8px;
    }

    .playList_info {
        width: 100%;
        height: max-content;
        padding: 8px;
    }
    .playList_title {
        font-size: 15px;
        color: #272626;
        font-weight: 500;
    }
    .playList_date {
        font-size: 12px;
        color: #0c0b0b;
        font-weight: lighter;
    }
    .playList_item:hover {
        background-color: #f0f0f0;
        color: #000000;
    }

    .playList_item:focus {
        opacity: 0.8;
    }
    i {
        width: 25px;
        height: 25px;
        padding: 1px;
    }
`;

const PlayList = ({ url = '', title = '', date = '' }) => {
    return (
        <PlayListContainer>
            <li className="playList_item">
                <div className="item_img">
                    <img src={`${url}`} alt="" className="" />
                </div>
                <div className="playList_info">
                    <div className="playList_title">{`${title}`}</div>
                    <h6 className="playList_date">{`${date}`}</h6>
                </div>
            </li>
        </PlayListContainer>
    );
};

export default PlayList;
