import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Spirals from '../components/Spirals';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NavHeader from '../components/NavHeader';
import anime from 'animejs';

import '../styles/index.css';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
    },
    textPrimary: {
        color: theme.palette.text.primary,
    },
}));

function Avatar({ imgSource }: { imgSource: string }) {
    const isLarge = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            width: '100%',
        },
        img: {
            borderRadius: '50%',
            width: '70%',
            [theme.breakpoints.up('sm')]: {
                width: '100%',
            },
        },
    }));

    const classes = useStyles();
    return (
        <div className={classes.root + ' Avatar'}>
            <img className={classes.img} alt="user-avatar" src={imgSource} />
        </div>
    );
}

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
                    <Grid container>
                        <Grid item xs={12} sm={3}>
                            <Avatar imgSource={'/img/profile.jpg'} />
                        </Grid>

                        <Grid item xs={12} sm={8}>
                            <Typography variant="h3" gutterBottom>
                                Hi!
                            </Typography>

                            <Typography variant="body1">
                                My name is Armi. I am a 4<sup>th</sup> year Software Engineering Student at the University of Alberta.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                My passion is to empower others by developing programs that will enhance their productivity and is visually
                                appealing.
                            </Typography>

                            <Box display="flex">
                                <IconButton
                                    aria-label="source"
                                    component={Link}
                                    href={'https://github.com/armiantos'}
                                    disableRipple
                                    className={classes.textPrimary}
                                >
                                    <GitHubIcon />
                                </IconButton>
                                <IconButton
                                    aria-label="source"
                                    component={Link}
                                    href={'https://www.linkedin.com/in/armiantos/'}
                                    disableRipple
                                    className={classes.textPrimary}
                                >
                                    <LinkedInIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </div>
    );
};

export default IndexPage;
