import { Badge } from "@mui/material";
import { Mail } from "@mui/icons-material";

export default function MUIBadge() {
    return (
        <>
            <Badge badgeContent={4} >
                <Mail />
            </Badge>
            <Badge badgeContent={4} color="primary" >
                <Mail />
            </Badge>
            <Badge badgeContent={4} invisible >
                <Mail />
            </Badge>
            
            <Badge badgeContent={100} anchorOrigin={{
                vertical: "bottom"
            }} color="success" max={999} >
                <Mail />
            </Badge>

            <Badge badgeContent={4} variant="dot" color="primary" >
                <Mail />
            </Badge>

            <Badge badgeContent={0} showZero color="primary" >
                <Mail />
            </Badge>

        </>
    )
}