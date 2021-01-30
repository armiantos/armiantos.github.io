const projects = [
    {
        name: 'GrokJS',
        source: 'https://github.com/cyrusdiego/grok-js',
        thumbnail: '/img/projects/grokjs.gif',
        summary:
            'This was our entry for HackED 2021. We implemented a Visual Studio Extension to help developers learn Javascript through reading. Googling for syntax can be difficult so our plugin explains code snippets that can be triggered by highlighting a code segment. The entire project was written in Typescript with the help of Acorn to parse JS files and we handle the mapping to appropriate documentation.',
    },
    {
        name: 'Unlibrary',
        source: 'https://github.com/CMPUT301F20T24/Unlibrary/',
        thumbnail: '/img/projects/unlibrary.png',
        summary:
            'Unlibrary is an Android app used to track book lendings and borrowings. People can search for books that other people have and is available for borrowing and can arrange a physical meet up to retrieve or return the book. We used Firebase as our backend service and Material design for the front end components. We used Android best practices including MVVM architecture, dependency injection using Hilt, set-up both unit and UI tests using Firebase emulator and Espresso respectively.',
    },
    {
        name: 'PongAI',
        source: 'https://github.com/n30phyte/HackEDBeta2018',
        thumbnail: '/img/projects/pong-ai.gif',
        summary:
            'This was our entry for HackED Beta 2019 (the beginner friendly version of HackED). We implemented Pong from scratch in C++ using SFML and trained a model under 24 hours using Keras and Python to play against humans. Though we could not integrate the model in our game in time (the model produced outputs but we could not get our game to recognize the model outputs), we still had lots of fun (as seen in our commit messages) and was able to make it up to the semifinals.',
    },
    {
        name: 'ARVP',
        source: 'https://arvp.org/',
        thumbnail: '/img/projects/auri-current-randomizer.png',
        summary:
            'I had the opportunity to help develop a self-driving underwater robot to participate in the annual RoboSub competition! The project involves developing our own simulator to reduce the number of pool trips we need to make to test our robot, use image and signal processing to locate objectives and obstacles from our camera and sonar sensors. The project uses ROS, Python and C++. One of my contributions was to add random currents to the simulator.',
    },
];

export default projects;
