import { CircularProgress, LinearProgress, Stack } from "@mui/material"

export default function MUIProgress() {
    return (
        <Stack spacing={2}>
            <CircularProgress />
            <CircularProgress color="success" />
            <CircularProgress enableTrackSlot color="success" /> 
            <CircularProgress color="warning" variant="determinate" value={67} />

            <LinearProgress />
            <LinearProgress color="success" />
            <LinearProgress enableTrackSlot color="success" /> 
            <LinearProgress color="warning" variant="determinate" value={67} />
            <LinearProgress color="warning" variant="buffer" value={67} valueBuffer={70} />
        </Stack>
    )
}