import { Autocomplete, TextField } from "@mui/material";

const skills = ["CSS", "C++", "HTML"]

export default function MUIAutocomplete( ) {
    return (
      <>
            <Autocomplete
                options={skills}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Skills" />}
                freeSolo
            />
      </>
    );
}