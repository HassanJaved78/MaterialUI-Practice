import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";

import { FileCopy, Save, Print, Edit } from "@mui/icons-material";

export default function MUISpeedDial() {
    return (
        <>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: "absolute", bottom: 16, right: 16 }}
                icon= {<SpeedDialIcon openIcon={<Edit />} />}
            >
                <SpeedDialAction icon={<FileCopy />} slotProps={{
                    tooltip: {
                        open: true,
                        title: "Copy"
                    }
                }} />
                <SpeedDialAction icon={<Save />} slotProps={{
                    tooltip: {
                        open: true,
                        title: "Save"
                    }
                }} />
                <SpeedDialAction icon={<Print />} slotProps={{
                    tooltip: {
                        open: true,
                        title: "Print"
                    }
                }} />
            </SpeedDial>
        </>
    )
}