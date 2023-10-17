import React, { useState } from "react";
import {
  FaRandom,
  FaStepBackward,
  FaPlay,
  FaPause,
  FaStepForward,
  FaRedo,
} from "react-icons/fa";
import { AiOutlineSound } from "react-icons/ai";
import "../MusicPlayer/MusicPlayer.css";

const MusicPlayer = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <div className="song-details">
        <img
          src="https://m.media-amazon.com/images/I/51ImvRrM7AL._UX500_FMwebp_QL85_.jpg"
          alt="Album Cover"
          className="album-cover"
        />
        <div className="song-info">
          <h3 className="song-heading">Song Heading</h3>
          <p className="song-data">Artist Name</p>
        </div>
      </div>
      <div className="player-controls">
        <FaRandom className="control-icon" />
        <FaStepBackward className="control-icon" />
        {isPlaying ? (
          <FaPause
            className="control-icon play-pause"
            onClick={togglePlayPause}
          />
        ) : (
          <FaPlay
            className="control-icon play-pause"
            onClick={togglePlayPause}
          />
        )}
        <FaStepForward className="control-icon" />
        <FaRedo className="control-icon" />
      </div>
      <AiOutlineSound className="control-icon" />
    </div>
  );
};

export default MusicPlayer;
