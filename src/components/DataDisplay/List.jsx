import { Box, List,ListItem, ListItemIcon, ListItemText, ListItemAvatar, ListItemButton, Avatar } from "@mui/material";
import { Mail } from "@mui/icons-material";

export default function MUIList() {
    return (
        <>
            <Box sx={{ width: 450, bgcolor:"primary.light" }}>
                <List>  
                    <ListItem>
                        <ListItemText primary="text" secondary="subtext" /> 
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <Mail />
                        </ListItemIcon>
                        <ListItemText primary="text" secondary="subtext" /> 
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar >
                                    H
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary="text" secondary="subtext" /> 
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton selected >
                            <ListItemIcon>
                                <ListItemAvatar>
                                    <Avatar >
                                        H
                                    </Avatar>
                                </ListItemAvatar>
                            </ListItemIcon>
                            <ListItemText primary="text" secondary="subtext" />
                        </ListItemButton> 
                    </ListItem>

                </List>
            </Box>
        </>
    )
}