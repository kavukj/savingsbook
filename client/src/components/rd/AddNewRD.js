import { Dialog, makeStyles, Modal, TextField, Typography } from '@material-ui/core';
import React from 'react';
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
        marginLeft: "10vw",
        paddingTop: "2vh"
    }
}))

const AddNewRD = ({ isOpen, type, toggleDialogHidden }) => {

    const classes = useStyles();

    return (
        <div className={classes.tables}>
            <Modal open={false} >
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
                        />
                        <TextField
                            label="Amount"
                            type="number"
                        />
                    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddNewRD);