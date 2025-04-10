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
          <p>WHERE ART MEETS HOPE.</p>
          <a href="#page2" className="cta-button" onClick={handleLearnMoreClick}>LEARN MORE</a>
        </div>
      </section>

      <section ref={page2Ref} id="page2" className="section page2">
        <div className="page2-content">
          <div className="page2-image">
            <img src="/muna.png" alt="Profile" />
            <div className="image-caption">
              <p>@bymuna.ko</p>
              <p>Portrait Artist Of The Year, 2022</p>
            </div>
          </div>
          <div className="page2-text">
            {/* <h1>About The Project</h1> */}
            <p>The Sunflower Project is a spirit-led 
              campaign by British-born Nigerian artist 
              BY MUNA KO (by-muhna-ko), documenting her 
              journey toward her first solo exhibition. 
              Rooted in faith and healing, the project 
              will culminate in a charitable showcase 
              where all artworks will be raffled, raising 
              funds for Black Minds Matter and The Sutton Trust. 
              These organisations reflect key parts of Muna's 
              story—from her early dreams of educational 
              access to the importance of mental health 
              in the Black community. 
            <br></br>Through storytelling and behind-the-scenes 
            content, the campaign highlights both her 
            creative process and those who are planting 
            seeds of hope in their own lives. At its heart, 
            The Sunflower Project invites you to reflect, 
            connect, and experience art as a form of giving.
            </p>
            <a href="https://www.instagram.com/thesunfl0werproject/" className="cta-button" target="_blank" rel="noopener noreferrer">FOLLOW THE JOURNEY</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
