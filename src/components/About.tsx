import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Spirals from './Spirals';
import './About.css';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(32),
        height: theme.spacing(32),
        margin: `${theme.spacing(2)}px auto`,
    },
    subtitle: {
        margin: `${theme.spacing(4)}px 0`,
    },
}));

function About() {
    const classes = useStyles();

    return (
        <div className="container">
            <Container maxWidth="md">
                <Typography variant="h3" gutterBottom>
                    Hi!
                </Typography>

                <Spirals />

                <Avatar alt="Me" src="/profile.JPG" className={classes.large} />

                <Typography variant="body1">
                    My name is Armi. I am a 4<sup>th</sup> year Software Engineering Student at the University of Alberta.
                </Typography>
                <Typography variant="body1">
                    My passion is to empower others by developing programs that will enhance their productivity and pleasing to look at.
                </Typography>
            </Container>
        </div>
    );
}

export default About;
