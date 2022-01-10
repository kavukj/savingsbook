import React, { useState } from 'react';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import RDTable from './RDTable';
import AddNewRD from './AddNewRD';
import AddIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux';
import { toggleOpen } from '../../redux/reducer/DialogueAction';
import AddNewFD from '../fd/AddNewFD';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#90EE90",
        color: "#000",
        minHeight: "4vh"
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
        marginTop: "1vh"
    }
}))

const RDPage = ({ toggleDialogHidden }) => {
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
                        RD Details
                    </Typography>
                    <AddIcon className={classes.icon} onClick={toggleDialogHidden} />
                </Toolbar>
            </AppBar>
            {open ?
                <div className={classes.table}>
                    <RDTable />
                </div>
                :
                null}
            <AddNewFD />
        </div>

    )
}

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = (dispatch) => ({
    toggleDialogHidden: () => dispatch(toggleOpen())
})

export default connect(mapStateToProps, mapDispatchToProps)(RDPage);