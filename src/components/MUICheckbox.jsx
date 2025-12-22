import { FormControl,FormGroup, FormControlLabel, Checkbox } from "@mui/material"
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

export default function MUICheckbox() {
    return (
        <>
            <FormControl>
                <FormControlLabel control={<Checkbox color="success"/>} label="Label" required />
            </FormControl>

            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel required control={<Checkbox />} label="Required" />
                <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
            </FormGroup>

            <FormControl>   
                <FormControlLabel control={ <Checkbox icon={<BookmarkBorderOutlinedIcon />} checkedIcon={<BookmarkIcon />} />} label="Save" labelPlacement="bottom" />
            </FormControl>

        </>
    )
}