import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getMIS } from '../../server/api';

const useStyles = makeStyles((theme) => ({
    headRow: {
        backgroundColor: "#000",
        '& > * ': {
            color: "#fff",
            fontSize: "13px",
            fontWeight: "bold"
        }
    },
    bodyRow: {
        backgroundColor: "#FAFAD2",
        '& > * ': {
            color: "#000",
            fontSize: "12px",
        }
    }
}))

const MISTable = () => {

    const classes = useStyles();
    const [misList, setMisList] = useState([])

    useEffect(() => {
        const getMISList = async () => {
            const misResponse = await getMIS();
            setMisList(misResponse)
        }
        getMISList();
    }, [])

    return (
        <>
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow className={classes.headRow}>
                            <TableCell align='left'>MIS No.</TableCell>
                            <TableCell align='left'>Created</TableCell>
                            <TableCell align='left'>Amount</TableCell>
                            <TableCell align='left'>Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            misList.map((mis) => (
                                <TableRow key={mis._id} className={classes.bodyRow}>
                                    <TableCell align='left'>
                                        {mis.number}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {mis.createdOn}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {mis.amount}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {mis.name}
                                    </TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
}

export default MISTable;