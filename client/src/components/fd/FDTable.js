import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { addFD, getFD } from '../../server/api';

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

const FDTable = () => {

    const classes = useStyles();
    const [fdList, setFdList] = useState([])

    useEffect(() => {
        const getFDList = async () => {
            const fdResponse = await getFD();
            setFdList(fdResponse)
        }
        getFDList();
    }, [])

    return (
        <>
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow className={classes.headRow}>
                            <TableCell align='left'>FD No.</TableCell>
                            <TableCell align='left'>Created</TableCell>
                            <TableCell align='left'>Amount</TableCell>
                            <TableCell align='left'>Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            fdList.map((fd) => (
                                <TableRow key={fd._id} className={classes.bodyRow}>
                                    <TableCell align='left'>
                                        {fd.number}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {fd.createdOn}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {fd.amount}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {fd.name}
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

export default FDTable;