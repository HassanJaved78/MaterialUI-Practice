import { Breadcrumbs, Link } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

export default function MUIBreakcrumbs() {
    return (
        <>
            <Breadcrumbs separator="-">
                <Link underline="hover" color="inherit" sx={{ display: "flex",alignItems: "center" }} >
                    <HomeIcon sx={{mr: 0.5}} />
                    Home
                </Link>
                <Link>Clothes</Link>
                <Link>Shirt</Link>
                <Link>Cart</Link>
            </Breadcrumbs>


            <Breadcrumbs maxItems={2} separator="-">
                <Link underline="hover" color="inherit" sx={{ display: "flex",alignItems: "center" }} >
                    <HomeIcon sx={{mr: 0.5}} />
                    Home
                </Link>
                <Link>Clothes</Link>
                <Link>Shirt</Link>
                <Link>Cart</Link>
            </Breadcrumbs>
        </>
    )
}