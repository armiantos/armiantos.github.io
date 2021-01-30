import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import { makeStyles, Theme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import projects from '../data/projects';

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: '50px',
    },
    img: {
        maxWidth: '100%',
    },
}));

function Projects() {
    const classes = useStyles();
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

    return (
        <div className="Projects">
            <Typography variant="h3" className={classes.title} gutterBottom>
                My projects
            </Typography>

            {projects.map((project) => (
                <Grid container justify="center" key={project.name}>
                    {project.thumbnail !== '' && (
                        <Grid item xs={10} sm={3}>
                            <img className={classes.img} src={project.thumbnail} alt={`${project.name}-thumbnail`} />
                        </Grid>
                    )}

                    <Grid item xs={12} sm={7} md={4}>
                        <Typography variant="h4" gutterBottom align={matches ? 'left' : 'center'}>
                            {project.name}
                        </Typography>

                        <Typography variant="body1" align={matches ? 'left' : 'center'}>
                            {project.summary}
                        </Typography>

                        <Box display="flex">
                            <IconButton aria-label="source" component={Link} href={project.source}>
                                <CodeIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            ))}
        </div>
    );
}

export default Projects;
