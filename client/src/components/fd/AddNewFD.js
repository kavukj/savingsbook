import { Button, makeStyles, MenuItem, Modal, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleOpen } from '../../redux/reducer/DialogueAction';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    tables: {
        width: "100%",
    },
    dialog: {
        height: "80vh",
        width: "80vw",
        backgroundColor: "#FFF",
        transform: 'translate(12%, 15%)',
    },
    form: {
        marginLeft: "14vw",
        paddingTop: "2vh",
        '& > *':{
            marginTop:"2vh"
        },
        marginBottom:"4vh"
    },
    button:{
        width:"50%",
        marginLeft:"20vw"
    }
}))

const AddNewFD = ({ isOpen, toggleDialogHidden }) => {

    const classes = useStyles();
    const [locationValue, setLocationValue] = useState("Jawahar Nagar")

    const location = [
        {
            value: 'Jawahar Nagar',
            label: 'Jawahar Nagar',
        },
        {
            value: 'Jareeb Chowki',
            label: 'Jareeb Chowki',
        },
        {
            value: 'Axis Bank',
            label: 'Axis Bank',
        },
        {
            value: 'ICICI Bank',
            label: 'ICICI Bank',
        },
        {
            value: 'Union Bank',
            label: 'Union Bank',
        },
        {
            value: 'HDFC Bank',
            label: 'HDFC Bank',
        },
        {
            value: 'State Bank',
            label: 'State Bank',
        },
    ];

    const handleLocation = (event) => {
        setLocationValue(event.target.value);
    };

    return (
        <div className={classes.tables}>
            <Modal open={isOpen} >
                <div className={classes.dialog}>

                    <CloseIcon onClick={toggleDialogHidden} style={{ float: "right" }} />
                    <div className={classes.form}>
                        <TextField
                            label="Number"
                        />
                        <TextField
                            label="Name"
                        />
                        <TextField
                            label="Created On"
                        />
                        <TextField
                            label="Maturity On"
                            type="date"
                        />
                        <TextField
                            label="Location"
                            value={locationValue}
                            onChange={handleLocation}
                            select
                        >
                            {location.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            label="Amount"
                            type="number"
                        />
                    </div>
                    <Button className={classes.button} variant="outlined">Submit</Button>
                </div>
            </Modal>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isOpen: state.dialogue.open
})

const mapDispatchToProps = (dispatch) => ({
    toggleDialogHidden: () => dispatch(toggleOpen())
})
export default connect(mapStateToProps, mapDispatchToProps)(AddNewFD);