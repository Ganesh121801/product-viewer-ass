import React from 'react';
import { Navigate } from "react-router-dom";
import { isTokenExpired } from "../services/authService";

export default function ProtectedRoute({children}){
    const token = localStorage.getItem("token");
    if(!token || isTokenExpired(token)){
        return <Navigate to="/login" replace/>
    }
    return children;
}