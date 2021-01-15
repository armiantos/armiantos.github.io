import React from 'react';
import { Card, CardMedia, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Experience.css';

type ExperienceProps = {
    employer: {
        name: string;
        logo?: string;
    };
    location: string;
    title: string;
    summary: string[];
};

function Experience({ employer, location, title, summary }: ExperienceProps) {
    const useStyles = makeStyles({
        img: {
            objectFit: 'contain',
            padding: '0 10%',
            boxSizing: 'border-box',
        },
    });
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
