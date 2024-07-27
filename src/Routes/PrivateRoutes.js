import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = () => {
    const accessToken = JSON.parse(localStorage.getItem("accessToken"))
    return accessToken ? <Outlet /> : <Navigate to = "/login" />

}

export default PrivateRoutes