import React from 'react';
import styled from 'styled-components';

const PlayListContainer = styled.div`
    font-size: 15px;
    height: 60px;

    .playList_item {
        padding: 0 10px 0 18px;
        display: flex;
        flex-direction: row;
        height: 100%;
        cursor: pointer;
        align-items: center;
        border-radius: 4px;
    }
    .item_img {
        height: 50px;
        width: 50px;
        padding: 2px;
    }
    .item_img img {
        width: 45px;
        height: 45px;
        border-radius: 8px;
    }

    .playList_info {
        width: 100%;
        height: max-content;
        padding: 10px;
    }
    .playList_title {
        font-size: 14px;
        color: #272626;
        font-weight: 500;
        margin-bottom: 1px;
    }
    .playList_date {
        font-size: 12px;
        color: #4a4545;
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
                    <h4 className="playList_title">{`${title}`}</h4>
                    <span className="playList_date">{`${date}`}</span>
                </div>
            </li>
            
        </PlayListContainer>
    );
};

export default PlayList;
