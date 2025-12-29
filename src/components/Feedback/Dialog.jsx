import { Dialog,DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { useState } from "react";

export default function MUIDialog() {

     const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button onClick={handleClickOpen}>Open Dialog</Button>

            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, illo. Expedita veritatis omnis, sequi doloribus officia saepe error consequuntur laudantium praesentium unde, similique, eveniet sit!
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button autoFocus  onClick={handleClose}>Agree</Button>
                    <Button onClick={handleClose}>Disagree</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}