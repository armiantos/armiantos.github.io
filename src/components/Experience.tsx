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
        width: '100%',
        height: '100%',
        padding: '5%',
        margin: 'auto',
    },
});

function Experience({ employer, location, title, summary, duration }: ExperienceProps) {
    const classes = useStyles();

    return (
        <Grid container justify="center" alignItems="center">
            <Grid item sm={4} md={3} lg={2}>
                <img className={classes.large} alt={`${employer.name}-logo`} src={employer.logo} />
            </Grid>
            <Grid item sm={7} md={6} lg={5}>
                <Typography gutterBottom variant="h5" align="left">
                    {employer.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" align="left">
                    {title}
                </Typography>
                <ul>
                    {summary.map((item, i) => (
                        <li key={i}>
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
