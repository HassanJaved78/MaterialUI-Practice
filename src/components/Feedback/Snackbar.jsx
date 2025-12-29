import { Snackbar, Stack, Button, Alert } from "@mui/material";

import { useState } from "react";

export default function MUISnackbar() {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Stack>
            <Button onClick={handleClick}>Open</Button>
            <Snackbar
                open={open}
                message="This is a toast message"
                autoHideDuration={3000}
                onClose={handleClose}
                action={<Button>UNDO</Button>}
            />


            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                action={<Button>UNDO</Button>}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
            >
                <Alert onClose={handleClose}>
                    This is a success Alert
                </Alert>
            </Snackbar>
        </Stack>
    )
}