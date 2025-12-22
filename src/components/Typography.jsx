import { Typography } from "@mui/material";

export default function TypographyCom() {
    return (
        <div>
            <Typography variant="h1">H1 heading</Typography>
            <Typography variant="h2">H2 heading</Typography>
            <Typography variant="h3">H3 heading</Typography>
            <Typography variant="h4">H4 heading</Typography>
            <Typography variant="h5" component="h1">H5 heading</Typography>
            <Typography variant="h6">H6 heading</Typography>

            <Typography variant="subtitle1">subtitle 1</Typography>
            <Typography variant="subtitle2">subtitle 1</Typography>

            <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos natus deleniti reiciendis dicta architecto soluta officia praesentium dolorum mollitia? Qui, nobis. Officiis obcaecati, deleniti asperiores accusamus distinctio laborum nulla sequi.</Typography>

            <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos natus deleniti reiciendis dicta architecto soluta officia praesentium dolorum mollitia? Qui, nobis. Officiis obcaecati, deleniti asperiores accusamus distinctio laborum nulla sequi.</Typography>
        </div>
    )
}