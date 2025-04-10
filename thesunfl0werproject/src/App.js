// App.js
import React, {useRef, useEffect} from 'react';
import './App.css';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  
  return (
    <div className="app">
      <section className="section video-section">
        <div className="overlay-header">
          <h1>
            <span>THE</span>
            <span>SUNFLOWER</span>
            <span>PROJECT</span>
          </h1>
        </div>
        <video
          ref={videoRef}
          className="background-video"
          src="/sunflower_animation.mp4"
          muted
          playsInline
          loop
          autoPlay
        />
        <div className="overlay-text">
          <p>Welcome to The Sunflower Project</p>
        </div>
      </section>

      <section className="section page2">
        <h1>Page 2</h1>
        <p>This is the second section.</p>
      </section>
    </div>
  );
}

export default App;
