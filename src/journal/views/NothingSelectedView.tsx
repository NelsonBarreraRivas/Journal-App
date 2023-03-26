import Camera from "@mui/icons-material/Camera"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

export const NothingSelectedView = () => {
    return (
        <Grid
            className="animate__animated animate__fadeIn animate_faster"
            container
            spacing={0}
            direction={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            sx={{
                minHeight: 'calc(100vh - 120px)',
                backgroundColor: 'primary.main',
                borderRadius: 3,
                padding: 4
            }}
        >
            <Grid item xs={12}>
                <Camera
                    sx={{
                        fontSize: 80,
                        color: 'white'
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <Typography color={'white'} variant={'h6'} fontSize={16}>
                    Selecciona o crea una entrada
                </Typography>
            </Grid>
        </Grid>
    )
}
