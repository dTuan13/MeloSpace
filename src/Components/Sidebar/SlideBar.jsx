import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import Logo from './logo/Logo';
import MenuItem from './MenuItem/MenuItem';
import Search from './Search/Search';
import RecentIcon from './recent/RecentIcon';
import PlayList from './playList/PlayList';

const playListItem = [
    {
        id: 1,
        url: 'https://i.scdn.co/image/ab676161000051745a79a6ca8c60e4ec1440be53',
        title: 'Bài ca hay',
        date: '3 ngày',
    },
    {
        id: 2,
        url: 'https://i.scdn.co/image/ab676161000051745a79a6ca8c60e4ec1440be53',
        title: 'Bài ca hay',
        date: '3 ngày',
    },
    {
        id: 3,
        url: 'https://i.scdn.co/image/ab676161000051745a79a6ca8c60e4ec1440be53',
        title: 'Bài ca hay',
        date: '3 ngày',
    },
    {
        id: 4,
        url: 'https://i.scdn.co/image/ab676161000051745a79a6ca8c60e4ec1440be53',
        title: 'Bài ca hay',
        date: '3 ngày',
    },
    {
        id: 5,
        url: 'https://i.scdn.co/image/ab676161000051745a79a6ca8c60e4ec1440be53',
        title: 'Bài ca hay',
        date: '3 ngày',
    },
    {
        id: 6,
        url: 'https://i.scdn.co/image/ab676161000051745a79a6ca8c60e4ec1440be53',
        title: 'Bài ca hay',
        date: '3 ngày',
    },
];

const initialNavBar = [
    {
        title: 'Trang chủ',
        url: '/',
        icon: <HomeIcon />,
        isActive: true,
    },
    {
        title: 'Hồ sơ',
        url: '/profile',
        icon: <AccountCircleIcon />,
        isActive: false,
    },
    {
        title: 'Thư viện',
        url: '/lib',
        icon: <LibraryMusicIcon />,
        isActive: false,
    },
];

const SlideBar = () => {
    const [navBar, setNavBar] = useState(initialNavBar);
    const [showInput, setShowInput] = useState(false);
    const inputRef = useRef(null);
    const location = useLocation();

    const updateNavBar = useCallback(() => {
        setNavBar((prevNavBar) =>
            prevNavBar.map((item) => ({
                ...item,
                isActive: item.url === location.pathname,
            })),
        );
    }, [location.pathname]);

    useEffect(() => {
        updateNavBar();
    }, [updateNavBar]);

    const handleInput = () => {
        setShowInput((prevShowInput) => !prevShowInput);
    };
    return (
        <Container>
            <div className="NavBar">
                <Logo></Logo>
                <div style={{ background: '#000000', position: 'relative' }}>
                    <ul className="menu">
                        {navBar.map((item, index) => (
                            <MenuItem
                                key={index}
                                title={item.title}
                                url={item.url}
                                icon={item.icon}
                                isActive={item.isActive}
                                index={index}
                            ></MenuItem>
                        ))}
                    </ul>
                </div>
                <div className="playList_active">
                    <div className="contain_search">
                        <button className="search" onClick={handleInput}>
                            <SearchIcon></SearchIcon>
                        </button>
                        <Search showinput={showInput} ref={inputRef} />
                    </div>
                    <RecentIcon></RecentIcon>
                </div>
            </div>
            <div className="playList">
                <div className="play_list">
                    <ul className="listItem">
                        {playListItem.map((item) => (
                            <PlayList url={item.url} title={item.title} date={item.date}></PlayList>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="lineBar"></div>
        </Container>
    );
};

const Container = styled.div`
    width: 340px;
    background: white;
    position: sticky;
    display: flex;
    left: 0;
    top: 0;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: nowrap;
    height: calc(100vh - 90px);
    ul {
        padding-left: 10px;
        margin-bottom: 0;
    }
    a {
        color: #000000;
        text-decoration: none;
        list-style-type: none;
    }
    button {
        border: none;
        outline: none;
        background: transparent;
    }
    svg {
        height: 24px;
        width: 24px;
    }
    .NavBar {
        width: 330px;
        background-color: white;
        z-index: 10000;
    }
    .logo {
        height: 10%;
    }

    .menu {
        padding-left: 24px;
        height: 128px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: #ffffff;
    }

    .playList {
        padding-left: 24px;
        background-color: #ffffff;
        padding-top: 10px;
    }

    .playList_active {
        position: relative;
        height: 35px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .recent {
        font-size: 14px;
    }
    .playList_find--input {
        width: 0;
        position: relative;
        height: 100%;
    }

    .search {
        position: absolute;
        z-index: 1000;
        height: 20px;
        width: 20px;
        align-items: center;
        padding-left: 30px;
    }

    .contain_search {
        width: 80px;
        height: 40px;
        padding-top: 7px;
    }

    .listItem {
        overflow-y: scroll;
        max-height: 300px;
        width: 360px;
        padding-left: 0;
    }

    .play_list {
        overflow: hidden;
    }

    .lineBar {
        width: 1px;
        height: 100vh;
        background-color: #e1e0e0;
        position: fixed;
        top: 0;
        left: 338px;
    }
`;

export default SlideBar;
