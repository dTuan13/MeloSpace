import React from 'react';
import styled from 'styled-components';

const PlayListContainer = styled.div`
    font-size: 15px;
    height: 50px;
    .playList_item {
        display: flex;
        flex-direction: row;
        height: 50px;
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
        color: #514f4f;
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
                    <div className="playList_date">{`${date}`}</div>
                </div>
            </li>
        </PlayListContainer>
    );
};

export default PlayList;
