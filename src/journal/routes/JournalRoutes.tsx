import { Navigate, RouteObject } from "react-router-dom";
import { JournalPage } from "../pages/JournalPage";
import { JournelLayout } from "../layout/JournelLayout";
import { PrivateRoute } from "../../router/PrivateRoute";

export const JournalRoutes: RouteObject[] = [
    {
        path: '/',
        element: <PrivateRoute><JournelLayout /></PrivateRoute>,
        children: [
            {
                path: '/',
                element: <JournalPage />
            },
            {
                path: '/*',
                element: <Navigate to={'/'} />
            }
        ]
    }
] 