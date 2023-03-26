import { RouteObject } from "react-router-dom";
import { AuthRoutes } from "../auth/routes";
import { JournalRoutes } from "../journal/routes";


export const routesConfig: RouteObject[] = [
    ...AuthRoutes,
    ...JournalRoutes
]