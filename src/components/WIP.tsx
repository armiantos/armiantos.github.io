import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
    },
}));

function WIP() {
    const classes = useStyles();
    
    return (
        <Container maxWidth="sm" className={classes.root}>
            Under construction
        </Container>
    )
}

export default WIP;
