import { Box, Card, CardHeader, Avatar,CardMedia, CardContent,Typography, CardActions, Button, CardActionArea } from "@mui/material";


export default function MUICard() {
    return (
        <Box>
            <Card sx={{ transform: "translateX(50%)", maxWidth:345}}>
                <CardActionArea>
                    <CardHeader
                        avatar={<Avatar>J</Avatar>}
                        title="Cart Title"
                        subheader="Subheader"
                    />

                    <CardMedia
                        component="img"
                        image="data:image/jpeg;base64,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"
                        alt="Paella dish"
                        height= "200"
                    />

                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                </CardActionArea>

                <CardActions>
                    <Button>Share</Button>
                    <Button>Subscribe</Button>
                </CardActions>

            </Card>
        </Box>
    )
}