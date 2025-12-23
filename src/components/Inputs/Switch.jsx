import { FormControlLabel, FormGroup, Switch } from "@mui/material"

import { useState } from "react"

export default function MuiSwitch() {

    const [checked, setChecked] = useState(false);

    return (
        <>
            <Switch  />

            <FormGroup>
                <FormControlLabel control={<Switch size="small" onChange={(e) => setChecked(e.target.checked)} checked={checked} required />} label="required" />
                <FormControlLabel control={<Switch readOnly />} label="read only" />
                <FormControlLabel control={<Switch disabled color="success" defaultChecked />} label="disabled" />
            </FormGroup>
        </>
    )
}