import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Spirals from '../components/Spirals';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import NavHeader from '../components/NavHeader';
import anime from 'animejs';

import '../styles/index.css';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
}));

const IndexPage = () => {
    const classes = useStyles();

    useEffect(() => {
        anime({
            targets: '.Banner',
            translateY: ['-20px', 0],
            opacity: [0, 1],
            easing: 'easeOutCubic',
            duration: 1000,
        });
    }, []);

    return (
        <div className="About">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Armi's Portfolio</title>
            </Helmet>
            <NavHeader />

            <Spirals />
            <Container maxWidth="md" className="Banner">
                <Paper className={classes.root} elevation={0}>
                    <Typography variant="h3" gutterBottom align="left">
                        Hi!
                    </Typography>
                    <Typography variant="body1" align="left">
                        My name is Armi. I am a 4<sup>th</sup> year Software Engineering Student at the University of Alberta.
                    </Typography>
                    <Typography variant="body1" align="left" gutterBottom>
                        My passion is to empower others by developing programs that will enhance their productivity and is visually
                        appealing.
                    </Typography>

                    <Box display="flex" justifyContent="flex-start">
                        <IconButton aria-label="source" component={Link} href={'https://github.com/armiantos'}>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton aria-label="source" component={Link} href={'https://www.linkedin.com/in/armiantos/'}>
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
};

export default IndexPage;
