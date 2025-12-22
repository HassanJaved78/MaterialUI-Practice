import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function SelectComponent() {
    const [age, setAge] = React.useState([]);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="age-label">Age</InputLabel>

        <Select
            labelId="age-label"
            id="age-select"
            multiple
            value={age}
            onChange={handleChange}
            label="Age"
            renderValue={(selected) => selected.join(", ")}
        >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
        </FormControl>
    );
}
