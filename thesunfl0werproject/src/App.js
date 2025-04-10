// App.js
import React, {useRef, useEffect} from 'react';
import './App.css';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight;
      const scrollFraction = Math.min(scrollTop / maxScroll, 1);

      if (videoRef.current) {
        const duration = videoRef.current.duration;
        videoRef.current.currentTime = duration * scrollFraction;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  
  return (
    <div className="app">
      <section className="section video-section">
        <video 
          ref={videoRef} 
          className="background-video"
          src="/sunflower_animation.mp4" 
          autoPlay 
          muted 
          loop 
        />
        <div className="overlay-text">
          <h1>The Sunflower Project</h1>
          <p>Scroll down to play the video</p>
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
