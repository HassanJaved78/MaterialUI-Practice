import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem,ListItemIcon, ListItemText, Divider } from "@mui/material"
import { useState } from 'react';
import { ContentCut } from '@mui/icons-material';
import { KeyboardArrowDown } from '@mui/icons-material';

export default function MUIAppBar() {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton color='inherit' size='large' edge="start" >
                    <MenuIcon />
                </IconButton>

                <Typography component="div" sx={{ flexGrow: 1 }} >
                    News
                </Typography>

                <Stack direction={'row'}>
                    <Button color='inherit' variant='text' >Home</Button>
                    <Button color='inherit' variant='text' >About</Button>
                    <Button color='inherit' variant='text' onClick={openMenu} endIcon={<KeyboardArrowDown />}>Resources</Button>
                </Stack>

                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    // anchorOrigin={{
                    //     vertical: "bottom",
                    //     horizontal: "left"
                    // }}
                >
                    <MenuItem>
                        <ListItemIcon>
                            <ContentCut />
                        </ListItemIcon>
                        <ListItemText>
                            Cut
                        </ListItemText>
                    </MenuItem>
                    <Divider />
                    <MenuItem>Podcast</MenuItem>
                </Menu>
    
            </Toolbar>
        </AppBar>
    )
}