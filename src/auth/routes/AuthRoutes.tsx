import { Navigate, RouteObject } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";
import { AuthLayout } from "../layout/AuthLayout";
import { PublicRoute } from "../../router/PublicRoute";


export const AuthRoutes : RouteObject[] = [
    {
        path: 'auth/*',
        element: <PublicRoute><AuthLayout /></PublicRoute>,
        children: [
            { path: 'login', element: <LoginPage /> },
            { path: 'register', element: <RegisterPage /> },
            { path: '*', element: <Navigate to={'login'}/> }
        ]
    }
]