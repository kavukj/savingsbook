import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getRD } from '../../server/api';

const useStyles = makeStyles((theme) => ({
    headRow:{
        backgroundColor:"#000",
        '& > * ':{
            color:"#fff",
            fontSize:"13px",
            fontWeight:"bold"
        }
    },
    bodyRow:{
        backgroundColor:"#FAFAD2",
        '& > * ':{
            color:"#000",
            fontSize:"12px",
        }
    }
}))

const RDTable = () => {
    const classes = useStyles();
    const [rdList, setRdList] = useState([])

    useEffect(() => {
        const getRDList = async () => {
            const rdResponse = await getRD();
            setRdList(rdResponse)
        }
        getRDList();
    }, [])

    return (
        <>
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow className={classes.headRow}>
                            <TableCell align='left'>RD No.</TableCell>
                            <TableCell align='left'>Created</TableCell>
                            <TableCell align='left'>Amount</TableCell>
                            <TableCell align='left'>Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rdList.map((rd) => (
                                <TableRow key={rd._id} className={classes.bodyRow}>
                                    <TableCell align='left'>
                                        {rd.number}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {rd.createdOn}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {rd.amount}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {rd.name}
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

export default RDTable;