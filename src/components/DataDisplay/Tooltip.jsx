import { Tooltip, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";

export default function MUITooltip(){
    return (
        <>
            <Tooltip title="Delete" enterDelay={300} arrow leaveDelay={300} placement="right-start" >
                <IconButton>
                    <Delete />
                </IconButton>
            </Tooltip>

            <Tooltip title="Delete" followCursor >
                <IconButton>
                    <Delete />
                </IconButton>
            </Tooltip>
        </>
    )
}