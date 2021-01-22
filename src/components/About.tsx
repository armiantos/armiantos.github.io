import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import anime from 'animejs';
import Logo from './Logo';
import Experience from './Experience';
import './About.css';

import experiences from '../data/experiences';

function animate() {
    const tl = anime.timeline({});

    tl.add({
        targets: '.logo path',
        easing: 'easeInOutSine',
        duration: 5000,
        strokeDashoffset: [anime.setDashoffset, 0],
    }).add(
        {
            targets: '.catchphrase',
            duration: 2000,
            opacity: [0, 1],
            easing: 'easeOutQuart',
            translateY: ['5vmin', 0],
        },
        '-=500'
    );
}

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(32),
        height: theme.spacing(32),
        margin: `${theme.spacing(2)}px 0 ${theme.spacing(2)}px 0`,
    },
    list: {
        margin: `${theme.spacing(4)}px 0`,
    },
    subtitle: {
        margin: `${theme.spacing(4)}px 0`,
    },
}));

function About() {
    const classes = useStyles();

    useEffect(() => {
        animate();
    });

    return (
        <div>
            <header className="header">
                <Logo className="logo" />
                <Typography variant="h5" className={`catchphrase ${classes.subtitle}`}>
                    I am <em>the</em> software engineer.
                </Typography>
            </header>

            <div className="container about short">
                <Typography variant="h3" gutterBottom>
                    About me
                </Typography>
                <Avatar alt="Me" src="/profile.jpg" className={classes.large} />
                <Typography variant="body1">
                    I am a 4<sup>th</sup> year Software Engineering Student at the University of Alberta. My passion is to empower others by
                    developing programs that will greatly enhance their productivity.
                </Typography>
            </div>

            <div className="container experiences">
                <Typography variant="h3" gutterBottom>
                    My work experience
                </Typography>
                <Grid container direction="row" justify="center" alignItems="center" className={classes.list} spacing={6}>
                    {experiences.map((experience) => (
                        <Grid item xs={12} key={experience.employer.name}>
                            <Experience
                                employer={experience.employer}
                                location={experience.location}
                                title={experience.title}
                                summary={experience.summary}
                                duration={experience.duration}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default About;
