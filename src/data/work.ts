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
            'Used C# and DirectX capture API to implement animated GIF recorder for PowerToys',
            'Worked on a confidential project with Azure Functions as part of Microsoft Global Hackathon involving Kubernetes',
            'Implemented an auto collage image generator ([Microsoft Gryd](https://www.behance.net/gallery/104025097/Microsoft-Gryd-A-Microsoft-Design-Internship-Project?fbclid=IwAR1JLvHi4EYL8nt9ddIUFgnDWmOhqGPMxFTSPZzGiMEsL3irz6EPxeSMXAI)) from user’s OneDrive using Flask and React',
            'Defined and implemented a scalable code and data architecture for a synchronous multiplayer game using Angular, Phaser, Express and Socket.io',
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
