import { makeStyles } from '@material-ui/core';
import React from 'react';
import AccountPage from '../components/account/Account';
import FDPage from '../components/fd/FD';
import Header from '../components/Header';
import MISPage from '../components/mis/MIS';
import RDPage from '../components/rd/RD';
import TDPage from '../components/td/TD';

const useStyles = makeStyles((theme) => ({
    tables: {
        margin: "4vh 2vw",
    }
}))

const HomePage = () => {
    const classes = useStyles();
    return (
        <>
            <Header />
            <div className={classes.tables}>
                <FDPage />
                <RDPage />
                <TDPage />
                <MISPage />
                <AccountPage />
            </div>

        </>

    )
}

export default HomePage;