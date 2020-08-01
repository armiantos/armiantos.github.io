import React, { useEffect } from "react";
import "./Portfolio.css";
import anime from "animejs";

import Logo from "../logo/Logo";

function App() {
  function animate() {
    const tl = anime.timeline({});

    tl.add({
      targets: ".App-logo path",
      easing: "easeInOutSine",
      duration: 5000,
      strokeDashoffset: [anime.setDashoffset, 0],
    }).add(
      {
        targets: ".App-catchphrase",
        duration: 2000,
        opacity: [0, 1],
        easing: "easeOutQuart",
        translateY: ["5vmin", 0],
      },
      "-=500"
    );
  }

  useEffect(() => {
    animate();
  });

  return (
    <div className="portfolio">
      <header className="header">
        <Logo className="logo" />
        <p className="catchphrase">
          I am <em>the</em> software engineer.
        </p>
      </header>
    </div>
  );
}

export default App;
