import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

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
    h5: {
        marginRight: '.5em',
    },
});

function toShortString(date: Date): String {
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

function Experience({ employer, location, title, summary, duration }: ExperienceProps) {
    const classes = useStyles();

    return (
        <Grid container justify="center" alignItems="center">
            <Grid item sm={4}>
                <img className={classes.large} alt={`${employer.name}-logo`} src={employer.logo} />
            </Grid>
            <Grid item sm={7}>
                <Box display="flex" alignItems="baseline">
                    <Typography variant="h5" align="left" className={classes.h5}>
                        {employer.name}
                    </Typography>
                    <Typography variant="h6" align="left" color="textSecondary">
                        {location}
                    </Typography>
                </Box>

                <Typography variant="subtitle1" align="left">
                    {title}
                </Typography>

                <Typography variant="subtitle1" color="textSecondary" align="left">
                    {`${toShortString(duration[0])} - ${toShortString(duration[1])}`}
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
