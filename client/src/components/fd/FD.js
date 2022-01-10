import React, { useState } from 'react';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import AddIcon from '@material-ui/icons/Add';
import FDTable from './FDTable';
import { connect } from 'react-redux';
import { toggleOpen } from '../../redux/reducer/DialogueAction';
import AddNewFD from './AddNewFD';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#90EE90",
        color: "#000",
        minHeight: "4vh",
    },
    title: {
        width: "100%",
        color: "#FFF",
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

const FDPage = ({ toggleDialogHidden }) => {
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
                        FD Details
                    </Typography>
                    <AddIcon className={classes.icon} onClick={toggleDialogHidden} />
                </Toolbar>
            </AppBar>
            {open ?
                <div className={classes.table}>
                    <FDTable />
                </div>
                :
                null
            }
            <AddNewFD />
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})
const mapDispatchToProps = (dispatch) => ({
    toggleDialogHidden: () => dispatch(toggleOpen())
})

export default connect(mapStateToProps, mapDispatchToProps)(FDPage);