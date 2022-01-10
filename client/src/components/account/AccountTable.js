import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {  getAccount } from '../../server/api';

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

const AccountTable = () => {

    const classes = useStyles();
    const [accountList, setAccountList] = useState([])

    useEffect(() => {
        const getAccountList = async () => {
            const accountResponse = await getAccount();
            setAccountList(accountResponse)
        }
        getAccountList();
    }, [])

    return (
        <>
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow className={classes.headRow}>
                            <TableCell align='left'>Account No.</TableCell>
                            <TableCell align='left'>Created</TableCell>
                            <TableCell align='left'>Amount</TableCell>
                            <TableCell align='left'>Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            accountList.map((account) => (
                                <TableRow key={account._id} className={classes.bodyRow}>
                                    <TableCell align='left'>
                                        {account.number}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {account.createdOn}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {account.amount}
                                    </TableCell>
                                    <TableCell align='left'>
                                        {account.name}
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

export default AccountTable;