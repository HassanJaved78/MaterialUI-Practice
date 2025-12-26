import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Home, Favorite, Person } from "@mui/icons-material";
import { useState } from "react";

export default function MUIBottomNavigation() {

    const [value, setValue] = useState(0);

    return (
        <>
            <BottomNavigation value={value} onChange={(event, newValue) => { setValue(newValue) }} showLabels sx={{ width: "100%", position: "absolute", bottom: 0 }} >
                <BottomNavigationAction label="Home" icon={ <Home /> } />
                <BottomNavigationAction label="Favorite" icon={ <Favorite /> } />
                <BottomNavigationAction label="Person" icon={ <Person /> } />
            </BottomNavigation>
        </>
    )
}