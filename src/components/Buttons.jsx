import React from "react";
import { Stack, Button, IconButton, Badge, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const MyButton = () => {
    return (
        <>
            <Button>Simple Button</Button>
            <Button variant = "contained">Contained Button</Button>
            <Button variant = "outlined">Outlined Button</Button>
            <Button variant = "text">Text Button</Button>

            <Stack spacing={2} direction={"row"} sx={{mt: 2}}>
                <Button color="primary" variant = "contained">Simple Button</Button>
                <Button color="info" variant = "contained">Simple Button</Button>
                <Button color="secondary" variant = "contained">Contained Button</Button>
                <Button color="error" variant = "contained">Outlined Button</Button>
                <Button color="warning" variant = "contained">Text Button</Button>
                <Button color="success" variant = "contained">Text Button</Button>
            </Stack> 

            <Stack display={"block"} direction={"row"} spacing={2} sx={{mt:5}}>
                <Button variant="contained" size="small">small</Button>
                <Button variant="contained" size="medium">medium</Button>
                <Button variant="contained" size="large">large</Button>
            </Stack>

            <ButtonGroup size="large" color="warning" variant="contained" orientation={"vertical"} sx={{mt:5}}>
                <Button>small</Button>
                <Button>medium</Button>
                <Button loading loadingIndicator="Loading.." variant="text">large</Button>
            </ButtonGroup>

            <Stack textAlign={"center"} spacing={5} mt={2} direction={"row"}>
                <Button variant="contained" disableElevation startIcon={<SendIcon />} >Send</Button>
                <Button variant="contained" disabled disableElevation endIcon={<SendIcon />} >Send</Button>

                <IconButton color="info" onClick={() => alert("sent")}>
                    <SendIcon/>
                    <Badge sx={{top: -12, right: 0}} badgeContent={2} color="secondary"  overlap="circular" ></Badge>
                </IconButton>
            </Stack>

            <ToggleButtonGroup sx={{mt:2}} size={"large"} value={["bold", "italic"]} color="warning" >
                <ToggleButton value={"bold"}>
                    Bold
                </ToggleButton>
                <ToggleButton value={"italic"}>
                    Italic
                </ToggleButton>
                <ToggleButton value={"underline"}>
                    Underline
                </ToggleButton>
            </ToggleButtonGroup>


        </>
    );
};

export default MyButton;
