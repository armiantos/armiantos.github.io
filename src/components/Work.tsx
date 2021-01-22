import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Experience from './Experience';

import experiences from '../data/experiences';

const useStyles = makeStyles((theme) => ({
    list: {
        margin: `${theme.spacing(4)}px 0`,
    },
}));

function Work() {
    const classes = useStyles();

    return (
        <div className="Work">
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
    );
}

export default Work;
