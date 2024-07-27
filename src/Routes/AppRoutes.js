import React from 'react'
import { Routes, Route } from 'react-router-dom'
import  PrivateRoutes  from './PrivateRoutes'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Test from '../Components/Test/Test'
import Search from '../Components/Search/index'

const index = () => {
    const PublicRoutes = [
    
    ]
    return (
        <Routes>
            <Route path='/' element = {<PrivateRoutes />} >
                <Route path='/'  element = {<Home />}>
                    <Route index element = {<Test />}/>
                    <Route path='/home' element = {<Test />}/>
                    <Route path = '/search' element = {<Search />}/>
                </Route>
            </Route>
            <Route path = 'login' element = {<Login />} />
        </Routes>
    )
}

export default index
