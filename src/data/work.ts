const work = [
    {
        employer: {
            name: 'Microsoft',
            logo: '/img/logo/microsoft.png',
        },
        duration: [new Date(2020, 4), new Date(2020, 7)],
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
        duration: [new Date(2020, 0), new Date(2020, 3)],
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
        duration: [new Date(2019, 4), new Date(2019, 7)],
        location: 'Edmonton',
        title: 'Research Assistant',
        summary: [
            'Designed a scalable database manager app in WPF (C#/XAML) to easily view and download data from mongoDB, Cassandra, MySQL, and CosmosDB',
            'Wrote a C#/Java interface to pipe 6000+ tags per second from OPC-DA server to mongoDB, Cassandra, MySQL',
            'Set-up a Hadoop and mongoDB cluster to process Big Data ',
        ],
    },
];

export default work;
