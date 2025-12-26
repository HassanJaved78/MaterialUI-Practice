import { Pagination,PaginationItem, Stack } from "@mui/material";

import { ArrowBack, ArrowForward } from "@mui/icons-material";

export default function MUIPagination() {
    return (
        <>
            <Stack spacing={2}>
                <Pagination count={20} />
                <Pagination count={20} color="warning" />
                <Pagination count={20} color="warning" size="large" disabled/>
                <Pagination count={20} variant="outlined" />

                <Pagination count={20} variant="outlined" showFirstButton showLastButton />
                <Pagination count={20} variant="outlined" showFirstButton showLastButton hideNextButton hidePrevButton />

                <Pagination
                    count={10}
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{ previous: ArrowBack, next: ArrowForward }}
                            {...item}
                            
                        />)}
                />

                <Pagination count={20} variant="outlined" siblingCount={2} boundaryCount={2} />

            </Stack>
        </>
    )
}