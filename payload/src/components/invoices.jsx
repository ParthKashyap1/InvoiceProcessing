
import { Table, TableHead, TableBody, TableRow, TableCell, Button, styled, Typography } from '@mui/material';

const StyledTable = styled(Table)({
    width: '80%',
    margin: 20,
    marginTop: 40,
    '& > thead > tr > th': {
        background: '#000',
        color: '#FFFFFF',
        fontSize: 18
    },
    '& > tbody > tr > td': {
        fontSize: 16
    },
    '& > tbody > p': {
        fontSize: 18,
        marginTop: 15,
    }
})

const Invoices = ({ invoices, removeInvoice }) => {
    return (
        <StyledTable>
            <TableHead>
                <TableRow>
                    <TableCell>Vendor</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    invoices && Array.isArray(invoices) && invoices.length > 0 ?
                    invoices.map(invoices => (
                    <TableRow>
                        <TableCell>{invoices.vendor} </TableCell>
                        <TableCell>{invoices.product} </TableCell>
                        <TableCell>{invoices.amount} </TableCell>
                        <TableCell>{invoices.date} </TableCell>
                        <TableCell>{invoices.status} </TableCell>
                        <TableCell>
                            <Button 
                            variant="contained" 
                            color="success"
                            onClick={() => removeInvoice(invoices.id)}
                            >Mark Done</Button>
                        </TableCell>
                    </TableRow>
                    ))
                    :
                    <Typography> No pending invoices </Typography>

                }
            </TableBody>
        </StyledTable>
    )
}

export default Invoices;