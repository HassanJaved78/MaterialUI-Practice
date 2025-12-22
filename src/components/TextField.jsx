import {Stack, TextField, InputAdornment} from "@mui/material";

export default function TextFieldExa() {
    return (
        <>
            <Stack direction={"row"} spacing={2} p={2} >
                <TextField label="Name" />
                <TextField label="Name" size="small" color="warning" variant="outlined" />
                <TextField label="Name" variant="filled" />
                <TextField label="Name" variant="standard" />
            </Stack>

            {/* Form Props */}

            <Stack direction="row" spacing={2} m={2} >
                <TextField required label="Req field" />  
                <TextField required label="password" helperText="helper text" />
                <TextField required disabled label="email" type="password" helperText="helper text" />
                <TextField multiline rows={2} maxrows={3} slotProps={{readOnly: true}} label="readonly" helperText="helper text" />

                <TextField label="weight" InputAdornment={{
                    startAdorment: <InputAdornment position="start">$</InputAdornment>
                }} />

            </Stack>

        </>
    )
}