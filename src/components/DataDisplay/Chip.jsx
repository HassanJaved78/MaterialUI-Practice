import { Chip, Avatar, Stack } from "@mui/material";
import { Face, Delete, Done } from "@mui/icons-material";

export default function MUIChip() {
    return (
        <>
            <Stack spacing={2} direction={"row"} sx={{ display: "flex", flexWrap: "wrap" }} >
                <Chip label="chip" />
                <Chip label="colored chip" color="primary" />
                <Chip label="outlined chip" variant="outlined" />
                <Chip label="chip with icon" icon={<Face />} color="secondary" />
                <Chip label="chip with avatar" avatar={<Avatar>H</Avatar>} color="success" />
                <Chip label="clickable chip" onClick={() => alert("click handler called")} />
                <Chip label="deleteable chip" color="warning" onDelete={() => alert("delete handler called")} />
                <Chip label="clickable and deleteable chip" color="warning" onClick={() => alert("click handler called")} onDelete={() => alert("delete handler called")} />
                <Chip label="clickable and deleteable chip with customized delete icon" deleteIcon={<Delete />} color="warning" onClick={() => alert("click handler called")} onDelete={() => alert("delete handler called")} />
                <Chip label="clickable and deleteable chip with customized delete icon" deleteIcon={<Done />} color="warning" onClick={() => alert("click handler called")} onDelete={() => alert("delete handler called")} />
                
            </Stack>
        </>
    )
}