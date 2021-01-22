import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import { makeStyles } from '@material-ui/core/styles';

import projects from '../data/projects';

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: '50px',
    },
}));

function Coding() {
    const classes = useStyles();

    return (
        <div className="Coding">
            <Typography variant="h3" className={classes.title} gutterBottom>
                My projects
            </Typography>
            {projects.map((project) => (
                <Grid container key={project.name} justify="center">
                    {project.thumbnail !== '' && (
                        <Grid item xs={5} sm={3}>
                            <img src={project.thumbnail} alt={`${project.name}-thumbnail`} />
                        </Grid>
                    )}

                    <Grid item xs={12} sm={7} md={5}>
                        <Typography variant="h4" gutterBottom>
                            {project.name}
                        </Typography>
                        <Typography variant="body1">{project.summary}</Typography>
                        <IconButton aria-label="source" component={Link} href={project.source}>
                            <CodeIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            ))}
        </div>
    );
}

export default Coding;
