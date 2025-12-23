import { Rating, Stack } from "@mui/material"
import { SentimentSatisfied } from "@mui/icons-material"
import { SentimentSatisfiedOutlined } from "@mui/icons-material"

export default function MUIRating() {
    return (
        <Stack>
            <Rating size="large" precision={0.25} />
            <Rating size="large" precision={0.25} readOnly />
            <Rating size="large" precision={0.25} disabled />

            <Rating icon={<SentimentSatisfied />} precision={0.5} emptyIcon={<SentimentSatisfiedOutlined />} />
        </Stack>
    )
}