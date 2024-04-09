import React from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';

function App() {
  const { opacity, y } = useSpring({
    from: { opacity: 0, y: -50 },
    to: { opacity: 1, y: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="container">
      <animated.div
        style={{
          opacity,
          transform: y.interpolate(y => `translateY(${y}px)`),
        }}
        className="greeting"
      >
        <h1>Eid Mubarak!</h1>
        <h3>from sami ahmed</h3>
        <p>May this special day bring peace, happiness, and prosperity to everyone.</p>
      </animated.div>
    </div>
  );
}

export default App;
