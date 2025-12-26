import { Avatar, AvatarGroup, Stack } from "@mui/material";

export default function MUIAvatar() {
    return (
        <>
            <Stack direction={"row"} spacing={1} >
                <Avatar>H</Avatar>
                <Avatar>J</Avatar>
            </Stack>
            <Stack direction={"row"} spacing={1} >
                <Avatar sx={{ bgcolor: "primary.light" }}>H</Avatar>
                <Avatar sx={{ bgcolor: "success.light" }}>J</Avatar>
            </Stack>
            <Stack direction={"row"} spacing={1} >
                <Avatar variant="circular" sx={{ bgcolor: "primary.light" }}>H</Avatar>
                <Avatar variant="square" sx={{ bgcolor: "success.light" }}>J</Avatar>
                <Avatar variant="rounded" sx={{ bgcolor: "success.light" }}>J</Avatar>
            </Stack>

            <Stack direction={"row"} spacing={1} >
                <Avatar alt="Remy Sharp" src="data:image/jpeg;base64,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" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </Stack>

            <AvatarGroup spacing={"medium"} max={3} total={20} >
                <Avatar sx={{ bgcolor: "primary.light" }}>H</Avatar>
                <Avatar sx={{ bgcolor: "success.light" }}>J</Avatar>
                <Avatar sx={{ bgcolor: "success.light" }}>J</Avatar>
            </AvatarGroup>
            <AvatarGroup spacing={"small"} total={20} >
                <Avatar sx={{ bgcolor: "primary.light" }}>H</Avatar>
                <Avatar sx={{ bgcolor: "success.light" }}>J</Avatar>
                <Avatar sx={{ bgcolor: "success.light" }}>J</Avatar>
            </AvatarGroup>
        </>
    )
}