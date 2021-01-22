import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import projects from '../data/projects';

function Coding() {
    return (
        <div className="Coding">
            {projects.map((project) => (
                <Grid container key={project.name}>
                    <Grid item></Grid>
                    <Grid item xs={12} sm={7} md={5}>
                        <Typography variant="h4" gutterBottom>{project.name}</Typography>
                        <Typography variant="body1">{project.summary}</Typography>
                    </Grid>
                </Grid>
            ))}
        </div>
    );
}

export default Coding;
