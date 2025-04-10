// App.js
import React, {useRef, useEffect} from 'react';
import './App.css';

function App() {
  const videoRef = useRef(null);
  const page2Ref = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    page2Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
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
          <p>AN EXHIBITION LIKE NOTHING YOU'VE EVER EXPERIENCED</p>
          <a href="#page2" className="cta-button" onClick={handleLearnMoreClick}>LEARN MORE</a>
        </div>
      </section>

      <section ref={page2Ref} id="page2" className="section page2">
        <h1>Page 2</h1>
        <p>This is the second section.</p>
      </section>
    </div>
  );
}

export default App;
