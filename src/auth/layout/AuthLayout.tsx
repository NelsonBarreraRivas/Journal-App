import { Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import { Outlet } from "react-router-dom"

export const AuthLayout = () => {

    return (
        <Grid
            container
            spacing={0}
            direction={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            sx={{
                minHeight: '100vh',
                backgroundColor: 'primary.main',
                padding: 4
            }}
        >
            <Grid item
                className="box-shadow"
                xs={3}
                sx={{
                    backgroundColor: '#fefefe',
                    px: 4,
                    py: 2,
                    borderRadius: 2,
                    width: { xs: '100%', sm: '75%', md: '38%' },
                }}
            >
                <Outlet />
            </Grid>
        </Grid>
    )
}
