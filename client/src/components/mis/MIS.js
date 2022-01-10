import React, { useState } from 'react';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import MISTable from './MISTable';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#90EE90",
        color: "#000",
        minHeight: "4vh",
    },
    title: {
        width: "100%",
        color:"#FFF",
        display: "flex",
        justifyContent: "left"
    },
    icon: {
        color: "#FFF",
        fontSize: "35px"
    },
    table: {
        marginTop: "1vh",
    }
}))

const MISPage = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <div style={{ marginBottom: "3vh" }}>
            <AppBar position='static'>
                <Toolbar className={classes.root} >
                    {open ?
                        <ArrowDropUpIcon className={classes.icon} onClick={() => { setOpen(false) }} />
                        :
                        <ArrowDropDownIcon className={classes.icon} onClick={() => { setOpen(true) }} />
                    }
                    <Typography className={classes.title}>
                        MIS Details
                    </Typography>
                </Toolbar>
            </AppBar>
            {open ?
                <div className={classes.table}>
                    <MISTable />
                </div>
                :
                null}
        </div>

    )
}

export default MISPage;