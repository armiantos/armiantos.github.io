import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import anime from 'animejs';

function App() {
  useEffect(() => { 
    anime({
      targets: ".App-logo",
      duration: 1000,
      easing: "easeOutQuart",
      rotate: 360,
      scale: [0, 1],
    });

    anime({
      targets: ".App-catchphrase",
      duration: 2000,
      opacity: [0, 1],
      translateY: ['5vmin', 0],
      easing: "easeOutQuart",
      delay: 300
    });
  });
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p className="App-catchphrase">
          I am <em>the</em> software engineer.
        </p>
      </header>
    </div>
  );
}

export default App;
