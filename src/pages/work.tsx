import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Experience from '../components/Experience';
import anime from 'animejs';
// import './Work.css'; TODO: Fix css imports

import work from '../data/work';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        opacity: 0, // Prevent flash before animation starts
    },
    title: {
        marginTop: '50px',
    },
}));

const WorkPage = () => {
    const classes = useStyles();

    useEffect(() => {
        anime({
            targets: '.experience',
            translateY: ['-20px', 0],
            opacity: [0, 1],
            easing: 'easeOutCubic',
            duration: 1000,
            delay: anime.stagger(200),
        });
    }, []);

    return (
        <div className="Work">
            <Typography variant="h3" className={classes.title} gutterBottom>
                My work experience
            </Typography>
            <Container maxWidth="md">
                <Grid container direction="row" justify="center" alignItems="center">
                    {work.map((experience) => (
                        <Grid item xs={12} key={experience.employer.name}>
                            <Paper elevation={0} className={classes.root + ' experience'}>
                                <Experience
                                    employer={experience.employer}
                                    location={experience.location}
                                    title={experience.title}
                                    summary={experience.summary}
                                    duration={experience.duration}
                                />
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default WorkPage;
