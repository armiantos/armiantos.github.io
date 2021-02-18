import React, { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import { makeStyles, Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import anime from 'animejs';

import projects from '../data/projects';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
    },
    title: {
        marginTop: '50px',
    },
    img: {
        maxWidth: '100%',
    },
    textPrimary: {
        color: theme.palette.text.primary,
    },
}));

function Projects() {
    const classes = useStyles();
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

    useEffect(() => {
        anime({
            targets: '.project',
            translateY: ['-20px', 0],
            opacity: [0, 1],
            easing: 'easeOutCubic',
            duration: 1000,
            delay: anime.stagger(200),
        });
    }, []);

    return (
        <div className="Projects">
            <Typography variant="h3" className={classes.title} gutterBottom>
                My projects
            </Typography>

            <Container maxWidth="md">
                <Grid container>
                    {projects.map((project) => (
                        <Grid item>
                            <Paper className={classes.root + ' project'}>
                                <Grid container key={project.name} justify="center" alignItems="center">
                                    {project.thumbnail !== '' && (
                                        <Grid item xs={12} sm={4}>
                                            <img className={classes.img} src={project.thumbnail} alt={`${project.name}-thumbnail`} />
                                        </Grid>
                                    )}

                                    <Grid item xs={12} sm={7}>
                                        <Typography variant="h4" gutterBottom align={matches ? 'left' : 'center'}>
                                            {project.name}
                                        </Typography>

                                        <Typography variant="body1" align={matches ? 'left' : 'center'}>
                                            {project.summary}
                                        </Typography>

                                        <Box display="flex" justifyContent={matches ? 'flex-start' : 'center'}>
                                            <IconButton
                                                aria-label="source"
                                                component={Link}
                                                href={project.source}
                                                className={classes.textPrimary}
                                            >
                                                <CodeIcon />
                                            </IconButton>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default Projects;