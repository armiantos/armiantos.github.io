import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

type ExperienceProps = {
    employer: {
        name: string;
        logo?: string;
    };
    duration: Date[];
    location: string;
    title: string;
    summary: string[];
};

const useStyles = makeStyles({
    large: {
        objectFit: 'contain',
        boxSizing: 'border-box',
        width: 200,
        height: '100%',
        margin: 'auto',
    },
});

function Experience({ employer, location, title, summary, duration }: ExperienceProps) {
    const classes = useStyles();

    return (
        <Grid container justify="center">
            <Grid item xs={2}>
                <img className={classes.large} alt={`${employer.name}-logo`} src={employer.logo} />
            </Grid>
            <Grid item xs={5}>
                <Typography gutterBottom variant="h5" align="left">
                    {employer.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" align="left">
                    {title}
                </Typography>
                <ul>
                    {summary.map((item) => (
                        <li>
                            <Typography variant="body1" align="left">
                                {item}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </Grid>
        </Grid>
    );
}

export default Experience;
