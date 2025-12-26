import { TableContainer, Table, TableHead, TableBody, TableFooter, TableRow, TableCell, Paper } from "@mui/material";

export default function MUITable() {
    return (
        <>
            <TableContainer component={Paper} sx={{ maxHeight: 300 }}>
                <Table stickyHeader >
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>First</TableCell>
                            <TableCell>Last</TableCell>
                            <TableCell align="center">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tableData.map((data) => (
                                <TableRow hover key={data.id}>
                                    <TableCell>{ data.id }</TableCell>
                                    <TableCell>{ data.first_name }</TableCell>
                                    <TableCell>{ data.last_name }</TableCell>
                                    <TableCell align="center">{ data.email }</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={4} align="center">
                                Footer
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </>
    )
}

const tableData = [
    {
        "id": 1,
        "first_name": "Isabelle",
        "last_name": "Quinet",
        "email": "iquinet0@spiegel.de"
    }, 
    {
        "id": 2,
        "first_name": "Anissa",
        "last_name": "MacConnechie",
        "email": "amacconnechie1@storify.com"
    }, 
    {
        "id": 3,
        "first_name": "Brynna",
        "last_name": "Chaulk",
        "email": "bchaulk2@sbwire.com"
    }, 
    {
        "id": 4,
        "first_name": "Anthea",
        "last_name": "Caudray",
        "email": "acaudray3@ucsd.edu"
    }, 
    {
        "id": 5,
        "first_name": "Heidi",
        "last_name": "Schuster",
        "email": "hschuster4@va.gov"
    }, 
    {
        "id": 6,
        "first_name": "Nanette",
        "last_name": "Lyokhin",
        "email": "nlyokhin5@businessweek.com"
    }, 
    {
        "id": 7,
        "first_name": "Lucina",
        "last_name": "Daviot",
        "email": "ldaviot6@live.com"
    }, 
    {
        "id": 8,
        "first_name": "Merrie",
        "last_name": "Warrack",
        "email": "mwarrack7@arizona.edu"
    }, 
    {
        "id": 9,
        "first_name": "Alexandros",
        "last_name": "Hopkins",
        "email": "ahopkins8@nature.com"
    }, {
        "id": 10,
        "first_name": "Susi",
        "last_name": "Boxe",
        "email": "sboxe9@blogspot.com"
    }
]