import { Accordion, AccordionSummary, AccordionDetails, Typography,Divider } from "@mui/material"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function MUIAccordion() {
    return (
        <>
            <Accordion defaultExpanded>
                <AccordionSummary 
                    expandIcon={<ArrowDropDownIcon />}
                >
                    <Typography variant="h6">Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolores?</Typography>
                </AccordionDetails>
            </Accordion>
            
            <Accordion disabled>
                <AccordionSummary 
                    expandIcon={<ArrowDropDownIcon />}
                >
                    <Typography  variant="h6">Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, dolores?</Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}