import { Alert, Stack, Button, AlertTitle } from "@mui/material";
import  { Check } from "@mui/icons-material";

export default function MUIAlert() {
    return (
        <Stack spacing={2}>
            {/* default alerts */}
            <Alert>This is an alert</Alert>
            <p>Default</p>
            <Alert severity="error">This is an error alert</Alert>
            <Alert severity="success">This is an success alert</Alert>
            <Alert severity="warning">This is an warning alert</Alert>
            <Alert severity="info">This is an info alert</Alert>

            <p>Filled</p>
            <Alert variant="filled" severity="error">This is an error alert</Alert>
            <Alert variant="filled" severity="success">This is an success alert</Alert>
            <Alert variant="filled" severity="warning">This is an warning alert</Alert>
            <Alert variant="filled" severity="info">This is an info alert</Alert>


            <p>Outlined</p>
            <Alert variant="outlined" severity="error">This is an error alert</Alert>
            <Alert variant="outlined" severity="success">This is an success alert</Alert>
            <Alert variant="outlined" severity="warning">This is an warning alert</Alert>
            <Alert variant="outlined" severity="info">This is an info alert</Alert>

            <p>Actions</p>
            <Alert variant="filled" severity="error" onClose={() => alert("Closed")} >This is an error alert with close button</Alert>
            <Alert variant="filled" severity="success" action={
                <Button color="inherit">UNDO</Button>
            } >
                This is an success alert with action button
            </Alert>
            
            <p>Icons</p>
            <Alert variant="filled" severity="error" icon={false} >This is an error alert with no icon</Alert>
            <Alert variant="filled" severity="error" icon={<Check fontSize="inherit" />} >This is an error alert with custom icon</Alert>

            <p>Title</p>
            <Alert variant="outlined" severity="error">
                <AlertTitle>Error</AlertTitle>
                This is an error alert
            </Alert>
            <Alert variant="outlined" severity="success">
                <AlertTitle>Success</AlertTitle>
                This is an success alert
            </Alert>
            <Alert variant="outlined" severity="warning">
                <AlertTitle>Warning</AlertTitle>
                This is an warning alert
            </Alert>
            <Alert variant="outlined" severity="info">
                <AlertTitle>Info</AlertTitle>
                This is an info alert
            </Alert>

        </Stack>
    )
}