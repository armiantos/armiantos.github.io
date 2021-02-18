import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        padding: '50px 0',
    },
}));

function WIP() {
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.root}>
            <Typography variant="h3">Under construction</Typography>
        </Container>
    );
}

export default WIP;
