import { Stack, Skeleton, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function MUISkeleton() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let interval = setTimeout(() => {
            setLoading(false) 
        }, 3000);
        
        return () => clearTimeout(interval);

    }, []);

    return (
        <Stack spacing={2}>
            <Skeleton />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" height={40} />
            <Skeleton variant="rounded" height={70} />

            <Skeleton variant="circular" width={40} height={40} animation={false} />
            <Skeleton variant="rectangular" height={40} animation={"wave"} />
            <Skeleton variant="rounded" height={70} />

            <Box>
                {
                    loading ? (
                        <Skeleton variant="rectangular" height={118} width={210} />
                    ) : (
                        <img style={{ width: 210, height: 118 }} src="https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ" alt="Don Diablo @ Tomorrowland Main Stage 2019 | Official…" />
                    )
                }

                
                {
                    loading ? (
                        <Box sx={{width: 210, height: 118, pt: 0.5 }} >
                            <Skeleton height={20} />
                            <Skeleton width="60%" height={16} />
                        </Box>
                    ) : (
                        <Box sx={{width: 210, height: 118}}>
                            <Typography gutterBottom variant="body1">Don Diablo @ Tomorrowland Main Stage 2019 | Official…</Typography>

                            <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary' }}>Don Diablo</Typography>

                            <Typography variant="caption" sx={{ color: 'text.secondary' }}>396k views . a week ago</Typography>
                        </Box>
                    )
                }
                
            </Box>

        </Stack>
    )
}