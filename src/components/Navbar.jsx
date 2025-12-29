import { AppBar, Box, Typography, Select, Toolbar, MenuItem  } from "@mui/material"

import { useColorScheme } from "@mui/material/styles"

export default function MyNavbar() {

    const { mode = "system", setMode } = useColorScheme();

    return (
        <Box  sx={{ flexGrow: 1 }}>
            <AppBar >
                <Toolbar>
                    <Typography sx={{ mr:2 }} variant="body1">Click to select mode</Typography>

                    <Select
                        variant="standard"
                        disableUnderline
                        value={mode}
                        sx={{ color:"white" }}
                        onChange={(event) => setMode(event.target.value)}
                    >
                        <MenuItem value="light" >Light</MenuItem>
                        <MenuItem value="dark" >Dark</MenuItem>
                        <MenuItem value="system" >System</MenuItem>
                    </Select>
                </Toolbar>
            </AppBar>
        </Box>
    )
}