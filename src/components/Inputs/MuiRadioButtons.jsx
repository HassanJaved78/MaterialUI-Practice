import { FormControl, FormControlLabel, FormLabel, RadioGroup, Radio } from "@mui/material";

export default function MuiRadioButtons() {
    return (
        <>
            <FormControl>
                <FormLabel>
                    Gender
                </FormLabel>

                <RadioGroup defaultValue="female">
                    <FormControlLabel value={"female"} control={<Radio color="warning" />} label="Female" labelPlacement="start" />
                    <FormControlLabel value={"male"} disabled control={<Radio size="large" />} label="Male" />
                </RadioGroup>
            </FormControl>
        </>
    )
}