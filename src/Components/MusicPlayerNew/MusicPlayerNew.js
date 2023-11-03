import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayerNew.css'; // Import your CSS file

function MusicPlayerNew() {
  const [volume, setVolume] = useState(50);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState({
    title: 'Song Title',
    artist: 'Artist Name',
    thumbnail: 'default-image-url',
    duration: 210, // Duration of the song in seconds (example: 3 minutes and 30 seconds)
  });

  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {

  };

  const handleNext = () => {

  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
    audioRef.current.volume = event.target.value / 100;
  };

  const handleTimeUpdate = (event) => {
    const currentTime = event.target.currentTime;
    const duration = event.target.duration;
    const progressPercentage = (currentTime / duration) * 100;
    setProgress(progressPercentage);
  };

  return (
    <div className="music-player-container">
      <div className="song-details">
        <img src={currentSong.thumbnail} alt="Album Art" className="album-cover" />
        <div className="song-info">
          <h6 className="song-title">{currentSong.title}</h6>
          <p className="song-artist">{currentSong.artist}</p>
        </div>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="player-controls">
        <button onClick={handlePrevious} className="control-button">
            Previous
        </button>
        <button onClick={togglePlayPause} className="control-button">
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={handleNext} className="control-button">
            Next
        </button>
      </div>
      <div className="volume-controls">
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          className="volume-slider"
        />
      </div>
      <audio
        ref={audioRef}
        src="your-audio-file-url.mp3"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
}

export default MusicPlayerNew;