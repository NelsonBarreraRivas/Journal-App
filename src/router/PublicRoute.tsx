import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useCheckAuth } from "../hooks";
import { useAppSelector } from "../store";


interface publicRouteProps {
    children: JSX.Element | JSX.Element[]
}
export const PublicRoute: FC<publicRouteProps> = ({ children }) => {
    
    const  {status}  = useAppSelector( state => state.auth )

    return status != 'authenticated' ? <>{children}</> : <Navigate to={"/"} />;
};