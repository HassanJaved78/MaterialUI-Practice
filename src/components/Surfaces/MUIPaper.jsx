import { Paper, Stack } from "@mui/material"

export default function MUIPaper() {
    return (
        <Stack spacing={2} direction="row" p={2} >
            <Paper sx={{ width: 128, height: 128, backgroundColor: "primary.main", display: "flex", alignItems: "center", justifyContent:"center" }} >Simple paper</Paper>
            <Paper sx={{ width: 128, height: 128 }} elevation={24}>elevation = 24</Paper>
            <Paper sx={{ width: 128, height: 128, backgroundColor: "warning.main" }} elevation={0}>elevation = 0</Paper>
            <Paper sx={{ width: 128, height: 128, backgroundColor: "secondary.main" }} elevation={6} variant="elevation">Variant = "elevation"</Paper>
            <Paper sx={{ width: 128, height: 128, backgroundColor: "secondary.main" }} variant="oulined">variant = "outlined"</Paper>
            <Paper sx={{ width: 128, height: 128, backgroundColor: "secondary.main" }}square={true}>squared corners</Paper>
            <Paper sx={{ width: 128, height: 128, backgroundColor: "secondary.main" }}square={false}>rounded corners</Paper>
        </Stack>
    )
}