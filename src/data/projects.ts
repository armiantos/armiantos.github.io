const projects = [
    {
        name: 'GrokJS',
        source: 'https://github.com/cyrusdiego/grok-js',
        thumbnail: '/img/projects/grokjs.gif',
        summary:
            'This was our entry for HackED 2021. We implemented a Visual Studio Extension to help developers learn Javascript. Googling for syntax can be difficult and our plugin displays what statement developers are looking at. People can also highlight a specific part of a statement to learn more about that statement. The entire project was written in Typescript with the help of Acorn to parse JS files and we handle the mapping to appropriate documentation.',
    },
    {
        name: 'Unlibrary',
        source: 'https://github.com/CMPUT301F20T24/Unlibrary/',
        thumbnail: '/img/projects/unlibrary.png',
        summary:
            'Unlibrary is an Android app used to track book lendings and borrowings. People can search for books that other people have and is available for borrowing and can arrange a physical meet up to retrieve or return the book. We used Firebase as our backend service and Material design for a lot of the front end components. We implemented Android best practices including MVVM architecture, Hilt dependency injection, and set-up both unit and e2e tests using Firebase emulator and Espresso.',
    },
    {
        name: 'PongAI',
        source: 'https://github.com/n30phyte/HackEDBeta2018',
        thumbnail: '/img/projects/pong-ai.gif',
        summary: 'This was our entry for HackED Beta 2019 (the beginner friendly version of HackED). We implemented Pong from scratch in C++ using SFML and trained a model under 24 hours using Keras and Python to play against humans. Though we failed to integrate the model in our game (the model produced outputs but we could not get our game to recognize the model outputs), we still had lots of fun (as seen in our commit messages) and was able to make it up to the semifinals.'

    },
    {
        name: 'ARVP',
        source: 'https://arvp.org/',
        thumbnail: '/img/projects/auri-current-randomizer.png',
        summary:
            'I had the opportunity to help develop a self-driving underwater robot to participate in the annual RoboSub competition! The project involves developing our own simulator to reduce the number of pool trips we need to make to test our robot, use image and signal processing to locate objectives and obstacles from our camera and sonar sensors. The project uses ROS, Python and C++. Participating in this university club marked the start of my software engineering career.',
    },
];

export default projects;
