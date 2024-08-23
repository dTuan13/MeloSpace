import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import DefaultContent from '../Pages/Home/DefaultContent/DefaultContent';
import Profile from '../Components/Profile/Profile';
import MainContainer from '../Components/Profile/MainContainer/MainContainer';
import UpLoad from '../Components/UpLoad/UpLoad';
import Auth from '../Components/Auth';
import Section from '../Components/Section';
import ForgotPassword from '../Pages/ForgotPassword';
import ItemOfUser from '../Components/AllItemOfUser/ItemOfUser';
import AllItem from '../Components/AllItem/AllItem';

const index = () => {
    const PublicRoutes = [];

    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<DefaultContent />} />
                <Route path="/home" element={<DefaultContent />} />
                <Route path="/profile" element={<PrivateRoutes />}>
                    <Route path="/profile" element={<Profile />}>
                        <Route path="/profile/record" element={<MainContainer url="apiToRecord" />} />
                        <Route path="/profile/album" element={<MainContainer url="apiToAlbum" />} />
                        <Route path="/profile/playlist" element={<MainContainer url="apiToPlaylist" />} />
                        <Route path="/profile/repost" element={<MainContainer url="apiToRePost" />} />
                        <Route index element={<MainContainer url="apiToRecord" />} />
                        <Route path="/profile/record" element={<MainContainer url="apiToRecord" />} />
                        <Route path="/profile/album" element={<MainContainer url="apiToAlbum" />} />
                        <Route path="/profile/playlist" element={<MainContainer url="apiToPlaylist" />} />
                        <Route path="/profile/repost" element={<MainContainer url="apiToRePost" />} />
                    </Route>
                </Route>
                <Route path="/section">
                    <Route index element={<DefaultContent />} />
                    <Route path="/section/list" element={<Section />} />
                </Route>
                <Route path="/records" element={<ItemOfUser url="user-record" />} />
                <Route path="/albums" element={<ItemOfUser url="user-album" />} />
                <Route path="/playlists" element={<ItemOfUser url="playlist" />} />
                {/* <Route path="/upload" element={<UpLoad />} /> */}

                <Route path="/record" element={<AllItem />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
            <Route path="/loginGoogle" element={<Auth />} />
        </Routes>
    );
};

export default index;
