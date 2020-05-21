import React, { useEffect } from "react";
import "./App.css";
import anime from "animejs";

import Logo from './Logo';

function App() {
  function animate() {
    var tl = anime.timeline({
    });

    tl
    .add({
      targets: ".App-logo path",
      easing: 'easeInOutSine',
      duration: 5000,
      strokeDashoffset: [anime.setDashoffset, 0],
    })
    .add({
      targets: ".App-catchphrase",
      duration: 2000,
      opacity: [0, 1],
      easing: 'easeOutQuart',
      translateY: ["5vmin", 0],
    }, '-=500')
  }

  useEffect(() => {
    animate();
  });

  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo"/>
        <p className="App-catchphrase">
          I am <em>the</em> software engineer.
        </p>
      </header>
    </div>
  );
}

export default App;
