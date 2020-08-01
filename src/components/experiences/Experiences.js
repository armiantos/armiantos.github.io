import React from 'react';
import './Experiences.css';

const experiences = [
    {
        employer: 'Microsoft',
        location: 'Vancouver',
        title: 'Software Engineer Intern',
        summary: [
            'Defined and implemented a scalable code and data architecture for my project',
            'Delivered efficient, well-structured, testable, and documented technical deliverables on time',
            'Designed important components through specs and kept the bug backlog under control',
        ],
    },
    {
        employer: 'Nokia',
        location: 'Kanata',
        title: 'Security Developer Intern',
        summary: [
            'Maintained custom RPM, docker, and helm deployment of Keycloak',
            'Created a generic system to upload custom jar modules to Keycloak helm via init-containers and config-maps',
            'Wrote a Jenkins pipeline to automate Keycloak Centos8 tests',
        ],
    },
    {
        employer: 'University of Alberta',
        location: 'Edmonton',
        title: 'Research Assistant',
        summary: [
            'Designed a scalable database manager app in WPF (C#/XAML) to easily view and download data from mongoDB, Cassandra, MySQL, and CosmosDB',
            'Wrote a C#/Java interface to pipe 6000+ tags per second from OPC-DA server to mongoDB, Cassandra, MySQL',
            'Set-up a Hadoop and mongoDB cluster to process Big Data ',
        ],
    },
];

function Experience({ employer, location, title, summary }) {
    return (
        <div className="experience">
            <h1 className="employer">{employer}</h1>
            <h3 className="location">{location}</h3>
            <h2 className="title">{title}</h2>
            {summary.map((el, i) => (
                <p key={i}>{el}</p>
            ))}
        </div>
    );
}

function Experiences() {
    return (
        <div className="experiences">
            <h1>My work experience</h1>
            {experiences.map((experience, i) => (
                <Experience
                    key={i}
                    employer={experience.employer}
                    location={experience.location}
                    title={experience.title}
                    summary={experience.summary}
                />
            ))}
        </div>
    );
}

export default Experiences;
