import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import DefaultContent from '../Pages/Home/DefaultContent/DefaultContent';
import Profile from '../Components/Profile/Profile';
import MainContainer from '../Components/Profile/MainContainer/MainContainer';
const index = () => {
    const PublicRoutes = [];

    return (
        <Routes>
            <Route path="/" element={<PrivateRoutes />}>
                <Route path="/" element={<Home />}>
                    <Route index element={<DefaultContent />} />
                    <Route path="/home" element={<DefaultContent />} />
                    <Route path="/profile" element={<Profile />}>
                        <Route path="/profile/record" element={<MainContainer url="apiToRecord" />} />
                        <Route path="/profile/album" element={<MainContainer url="apiToAlbum" />} />
                        <Route path="/profile/playlist" element={<MainContainer url="apiToPlaylis" />} />
                        <Route path="/profile/repost" element={<MainContainer url="apiToRePost" />} />
                    </Route>
                </Route>
            </Route>
            <Route path="login" element={<Login />} />
        </Routes>
    );
};

export default index;
