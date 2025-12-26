import { Box, Button, Drawer, SwipeableDrawer, Typography } from "@mui/material";
import { useState } from "react";

export default function MUIDrawer() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open sidebar</Button>
            <Drawer open={open} anchor="left" onClose={() => setOpen(false) }  >
                <Box textAlign={"center"} sx={{ minWidth: "220px" }}>
                    <Typography>Side bar</Typography>
                </Box>
            </Drawer>

            <SwipeableDrawer open={open} onOpen={() => setOpen(true)} anchor="right" onClose={() => setOpen(false) }  >
                <Box textAlign={"center"} sx={{ minWidth: "220px" }}>
                    <Typography>swipeable Side bar open movile view to swipe</Typography>
                </Box>
            </SwipeableDrawer>
        </>
    )
}