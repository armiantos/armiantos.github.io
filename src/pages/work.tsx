import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import anime from 'animejs';

import work from '../data/work';
import NavHeader from '../components/NavHeader';
import Link from '@material-ui/core/Link';

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

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        opacity: 0, // Prevent flash before animation starts
    },
    title: {
        marginTop: '50px',
    },
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
}));

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

function renderLinks(markdown: string) {
    const linkCatcher = /\[(.+?)\]\((.+?)\)/g;
    const matches = markdown.matchAll(linkCatcher);

    if (matches === null) {
        return <Typography variant="body1">{markdown}</Typography>;
    }

    let i = 0;
    let contents: any[] = [];

    for (const match of matches) {
        console.log(match);
        contents.push(markdown.substr(i, markdown.indexOf(match[0]) - i));
        contents.push(<Link href={match[2]} color="secondary">{match[1]}</Link>);
        i += markdown.indexOf(match[0]) + match[0].length;
    }

    contents.push(markdown.substr(i, markdown.length));

    return contents;
}

const Work = ({ employer, location, title, summary, duration }: ExperienceProps) => {
    const classes = useStyles();

    return (
        <Grid container justify="center" alignItems="center">
            <Grid item sm={4}>
                <img className={classes.large} alt={`${employer.name}-logo`} src={employer.logo} />
            </Grid>
            <Grid item sm={7}>
                <Box display="flex" alignItems="baseline">
                    <Typography variant="h5" className={classes.h5}>
                        {employer.name}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        {location}
                    </Typography>
                </Box>

                <Typography variant="subtitle1">{title}</Typography>

                <Typography variant="subtitle1" color="textSecondary">
                    {`${toShortString(duration[0])} - ${toShortString(duration[1])}`}
                </Typography>

                <ul>
                    {summary.map((point, i) => (
                        <li key={i}>
                            <Typography variant="body1">{renderLinks(point)}</Typography>
                        </li>
                    ))}
                </ul>
            </Grid>
        </Grid>
    );
};

const WorkPage = () => {
    const classes = useStyles();

    useEffect(() => {
        anime({
            targets: '.experience',
            translateY: ['-20px', 0],
            opacity: [0, 1],
            easing: 'easeOutCubic',
            duration: 1000,
            delay: anime.stagger(200),
        });
    }, []);

    return (
        <div className="Work">
            <NavHeader />

            <Typography variant="h3" className={classes.title} gutterBottom align="center">
                My work experience
            </Typography>
            <Container maxWidth="md">
                <Grid container direction="row" justify="center" alignItems="center">
                    {work.map((experience) => (
                        <Grid item xs={12} key={experience.employer.name}>
                            <Paper elevation={0} className={classes.root + ' experience'}>
                                <Work
                                    employer={experience.employer}
                                    location={experience.location}
                                    title={experience.title}
                                    summary={experience.summary}
                                    duration={experience.duration}
                                />
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default WorkPage;
