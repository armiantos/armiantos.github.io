import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Spirals from './Spirals';
import { makeStyles } from '@material-ui/core/styles';
import anime from 'animejs';

import './About.css';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
}));

function About() {
    const classes = useStyles();

    useEffect(() => {
        anime({
            targets: '.about',
            translateY: ['-50px', 0],
            opacity: [0, 1],
            easing: 'easeOutCubic',
            duration: 1000,
        });
    }, []);

    return (
        <div className="container">
            <Spirals />
            <Container maxWidth="md" className="about">
                <Paper className={classes.root} elevation={0}>
                    <Typography variant="h3" gutterBottom align="left">
                        Hi!
                    </Typography>
                    <Typography variant="body1" align="left">
                        My name is Armi. I am a 4<sup>th</sup> year Software Engineering Student at the University of Alberta.
                    </Typography>
                    <Typography variant="body1" align="left">
                        My passion is to empower others by developing programs that will enhance their productivity and is visually
                        appealing.
                    </Typography>
                </Paper>
            </Container>
        </div>
    );
}

export default About;
