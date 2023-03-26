import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useCheckAuth } from "../hooks";
import { useAppSelector } from "../store";

interface privateRouteProps{
    children: JSX.Element | JSX.Element[]
}

export const PrivateRoute : FC<privateRouteProps> = ({ children }) => {
    
    const  {status}  = useAppSelector( state => state.auth )
    
    return status == 'authenticated' ? <>{children}</> : <Navigate to={"/auth/login"} />;
};
