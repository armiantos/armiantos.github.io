import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Spirals from './Spirals';
import './About.css';

function About() {
    return (
        <div className="container">
            <Spirals />
            <Container maxWidth="md">
                <Typography variant="h3" gutterBottom align="left">
                    Hi!
                </Typography>
                <Typography variant="body1" align="left">
                    My name is Armi. I am a 4<sup>th</sup> year Software Engineering Student at the University of Alberta.
                </Typography>
                <Typography variant="body1" align="left">
                    My passion is to empower others by developing programs that will enhance their productivity and is visually appealing.
                </Typography>
            </Container>
        </div>
    );
}

export default About;
