import { Link, Stack } from "@mui/material"

export default function MUILink( ) {
    return (
        <>
            <Stack spacing={2} p={1}>
                <Link>Simple link</Link>
                <Link variant="h5" href="#" underline="none">
                    {'underline="none"'}
                </Link>
                <Link color="inherit" href="#" underline="hover">
                    {'underline="hover"'}
                </Link>
                <Link color="secondary" href="#" underline="always">
                    {'underline="always"'}
                </Link>
                <Link color="warning" href="#" component="button" underline="always">
                    Button Link
                </Link>
            </Stack>
        </>
    )
}