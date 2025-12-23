import { Box, Grid } from "@mui/material"

export default function MUIGrid() {
    return (
        <>
            <Grid container spacing={2} rowSpacing={4}>
                <Grid size={{ xs:1, md:2 }} sx={{backgroundColor: "primary.main" }} >
                    <Box sx={{height: 100, p:2 }}>1</Box>
                </Grid>

                <Grid size={10} sx={{backgroundColor: "primary.light"}}>
                    <Box sx={{height: 100, p:2 }}>1</Box>
                </Grid>

                <Grid  sx={{backgroundColor: "secondary.main"}}>
                    <Box sx={{height: 100, p:2 }}>1</Box>
                </Grid>

                <Grid  sx={{ bgcolor:"success.light" }}>
                    <Box sx={{height: 100, p:2 }}>1</Box>
                </Grid>
            </Grid>
        </>
    )
}