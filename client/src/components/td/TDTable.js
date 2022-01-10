import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getTD } from '../../server/api';

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

const TDTable = () => {

    const classes = useStyles();
    const [tdList, setTdList] = useState([])

    useEffect(() => {
        const getTDList = async () => {
            const tdResponse = await getTD();
            setTdList(tdResponse)
        }
        getTDList();
    }, [])

    return (
        <>
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow className={classes.headRow}>
                            <TableCell align='left'>TD No.</TableCell>
                            <TableCell align='left'>Created</TableCell>
                            <TableCell align='left'>Amount</TableCell>
                            <TableCell align='left'>Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tdList.map((td) => (
                                <TableRow key={td._id} className={classes.bodyRow}>
                                    <TableCell align='left'>
                                        {td.number}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {td.createdOn}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {td.amount}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {td.name}
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

export default TDTable;