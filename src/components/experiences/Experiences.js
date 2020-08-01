import React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    Grid,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Experiences.css';

const experiences = [
    {
        employer: {
            name: 'Microsoft',
            logo: '/img/logo/microsoft.png',
        },
        location: 'Vancouver',
        title: 'Software Engineer Intern',
        summary: [
            'Defined and implemented a scalable code and data architecture for my project',
            'Delivered efficient, well-structured, testable, and documented technical deliverables on time',
            'Designed important components through specs and kept the bug backlog under control',
        ],
    },
    {
        employer: {
            name: 'Nokia',
            logo: '/img/logo/nokia.png',
        },
        location: 'Kanata',
        title: 'Security Developer Intern',
        summary: [
            'Maintained custom RPM, docker, and helm deployment of Keycloak',
            'Created a generic system to upload custom jar modules to Keycloak helm via init-containers and config-maps',
            'Wrote a Jenkins pipeline to automate Keycloak Centos8 tests',
        ],
    },
    {
        employer: {
            name: 'University of Alberta',
            logo: '/img/logo/uofa.png',
        },
        location: 'Edmonton',
        title: 'Research Assistant',
        summary: [
            'Designed a scalable database manager app in WPF (C#/XAML) to easily view and download data from mongoDB, Cassandra, MySQL, and CosmosDB',
            'Wrote a C#/Java interface to pipe 6000+ tags per second from OPC-DA server to mongoDB, Cassandra, MySQL',
            'Set-up a Hadoop and mongoDB cluster to process Big Data ',
        ],
    },
];

const useStyles = makeStyles({
    img: {
        objectFit: 'contain',
        padding: '0 10%',
        boxSizing: 'border-box',
    },
});

function Experience({ employer, location, title, summary }) {
    const classes = useStyles();

    return (
        <Card>
            <CardMedia
                component="img"
                alt={`${employer.name}-logo`}
                image={employer.logo}
                height="200"
                className={classes.img}
            ></CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {employer.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
}

function Experiences() {
    return (
        <div className="experiences">
            <Typography variant="h2" component="h2">
                My work experience
            </Typography>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="center"
                alignItems="center"
            >
                {experiences.map((experience) => (
                    <Grid item xs={3} key={experience.employer.name}>
                        <Experience
                            employer={experience.employer}
                            location={experience.location}
                            title={experience.title}
                            summary={experience.summary}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Experiences;
