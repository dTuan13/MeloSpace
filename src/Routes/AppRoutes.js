import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import DefaultContent from '../Pages/Home/DefaultContent/DefaultContent';
import Profile from '../Components/Profile/Profile';
import MainContainer from '../Components/Profile/MainContainer/MainContainer';
import Auth from '../Components/Auth';
import Section from '../Components/Section';
const index = () => {
    const PublicRoutes = [];

    return (
        <Routes>
      
                <Route path="/" element={<Home />}>
                    <Route index element={<DefaultContent />} />
                    <Route path="/home" element={<DefaultContent />} />
                    <Route path="/profile"  element={<PrivateRoutes />}>
                        <Route path="/profile" element={<Profile />}>
                            <Route path="/profile/record" element={<MainContainer url="apiToRecord" />} />
                            <Route path="/profile/album" element={<MainContainer url="apiToAlbum" />} />
                            <Route path="/profile/playlist" element={<MainContainer url="apiToPlaylis" />} />
                            <Route path="/profile/repost" element={<MainContainer url="apiToRePost" />} />
                            <Route index element={<MainContainer url = 'apiToRecord' />} />
                            <Route path="/profile/record" element={<MainContainer url = 'apiToRecord' />} />
                            <Route path="/profile/album" element={<MainContainer url = 'apiToAlbum'/>} />
                            <Route path="/profile/playlist" element={<MainContainer url = 'apiToPlaylis'/>} />
                            <Route path="/profile/repost" element={<MainContainer url = 'apiToRePost'/>} />
                        </Route>
                       
                    </Route>

                    <Route path="/section">
                        <Route index element={<DefaultContent />} />
                        <Route path="section/danhchoban" element={<Section section_id="1" />} />
                        <Route path="section/album" element={<Section section_id="2" />} />
                        <Route path="section/user" element={<Section section_id="3" />} />
                        <Route path="section/playlist" element={<Section section_id="4" />} />
                        <Route path="section/popular" element={<Section section_id="5" />} />
                    </Route>
                </Route>
            </Route>
            <Route path="login" element={<Login />} />
            <Route path = '/loginGoogle' element= {<Auth/>} />
        </Routes>
    );
};

export default index;
