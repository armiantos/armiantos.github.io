import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type ExperienceProps = {
    employer: {
        name: string;
        logo?: string;
    };
    location: string;
    title: string;
    summary: string[];
};

const useStyles = makeStyles({
    img: {
        objectFit: 'contain',
        padding: '0 10%',
        boxSizing: 'border-box',
    },
});

function Experience({ employer, location, title, summary }: ExperienceProps) {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia component="img" alt={`${employer.name}-logo`} image={employer.logo} height="200" className={classes.img}></CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {employer.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Experience;
