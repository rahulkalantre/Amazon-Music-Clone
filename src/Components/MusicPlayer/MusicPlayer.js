import React, { useState, useRef, useEffect } from "react";
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

const MusicPlayer = ({ songDetails, setSongDetails, isPlaying, setIsPlaying }) => {
  const [currentindex, setCurrentIndex] = useState(songDetails.index)
  
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  const nextSong = () => {

  }

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      if (isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }

    let updatedSong = songDetails.songs[currentindex]
    updatedSong = {
      img: updatedSong?.thumbnail || '',
      title: updatedSong?.title || '',
      artist: updatedSong?.artist[0]?.name || '',
      songs: songDetails.songs || [],
      index: currentindex,
    }
    setSongDetails(updatedSong)
  }, [isPlaying, currentindex])

  return (
    <div className="music-player">
      <div className="song-details">
        <img src={songDetails?.img} alt="Album Cover" className="album-cover" />
        <div className="song-info">
          <h3 className="song-heading">{songDetails?.title}</h3>
          <p className="song-data">{songDetails?.artist}</p>
        </div>
      </div>
      <div className="player-controls">
        <FaRandom className="control-icon" />
        <FaStepBackward className="control-icon"  onClick={() => setCurrentIndex(currentindex - 1)} />
        {/* <button onClick={togglePlayPause}> */}
        {isPlaying ? (
          <>
            <FaPause
              className="control-icon play-pause"
              onClick={togglePlayPause}
            />
            {/* {audioRef.play()} */}
          </>
        ) : (
          <FaPlay
            className="control-icon play-pause"
            onClick={togglePlayPause}
          />
        )}
        {/* </button> */}
        <audio  src={songDetails?.songs[currentindex]?.audio_url}  ref={ref} type="audio/ogg" />
        <FaStepForward className="control-icon" onClick={() => setCurrentIndex(currentindex + 1)}/>
        <FaRedo className="control-icon" />
      </div>
      <AiOutlineSound className="control-icon" />
    </div>
  );
};

export default MusicPlayer;
