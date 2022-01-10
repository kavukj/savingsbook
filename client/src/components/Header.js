import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "black",
        minHeight:"8vh",
        width:"100%",
        color:"#FFF",
        boxShadow:"0px 3px 8px rgba(0,0,0,0.5)"
    },
    title:{
        width:"100%",
        display:"flex",
        justifyContent:"center"
    }
}))

const Header = () => {
    const classes = useStyles();

    return (
        <>  
            <AppBar position='static'>
                <Toolbar className={classes.root}>
                    <Typography className={classes.title}>
                        Savings Book
                    </Typography>
                </Toolbar>
            </AppBar>
        </>

    )
}

export default Header;