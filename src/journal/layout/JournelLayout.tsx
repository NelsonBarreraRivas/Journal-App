import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import { Outlet } from "react-router-dom"
import { Navbar, Sidebar } from "../components"

const drawerWidth = 260

export const JournelLayout = () => {

    return (
        <Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animate_faster">

            {/* Navbar */}
            <Navbar drawerWidth={drawerWidth}/>

            {/* Sidebar */}
            <Sidebar drawerWidth={drawerWidth}/>

            <Box 
                component={'main'}
                sx={{
                    flexGrow: 1,
                    p: 3
                }}
            >
                {/* Toolbar */}
                <Toolbar />
                <Outlet />
            </Box>

        </Box>
    )
}
