import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Experience from './Experience';
import './Work.css';

import experiences from '../data/experiences';

const useStyles = makeStyles((theme) => ({
    title: {
        marginTop: '50px'
    }
}));

function Work() {
    const classes = useStyles();

    return (
        <div className="Work">
            <Typography variant="h3" className={classes.title} gutterBottom>My work experience</Typography>
            <Grid container direction="row" justify="center" alignItems="center" >
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
    );
}

export default Work;
