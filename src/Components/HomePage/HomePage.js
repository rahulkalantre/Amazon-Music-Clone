import React from "react";
import "../HomePage/HomePage.css";
import TrendingSongs from "../TrendingSongs/TrendingSongs";
import CardComponents from "../CardComponents/CardComponents";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { useMusicPlayer } from "../../Context/MusicPlayerProvider";

const arr = [
  {
    "category": "romantic",
    "title": "Romantic Songs"
  },
  {
    "category": "excited",
    "title": "Excited Songs"
  },
  {
    "category": "happy",
    "title": "Happy Songs"
  },
  {
    "category": "sad",
    "title": "Sad Songs"
  },
]

const HomePage = () => {
  const { playSong } = useMusicPlayer()

  return (
    <div className="home-page">
      {
         arr?.map((item, index) => {
          return <CardComponents newData = {item} />
        })
      }
      <TrendingSongs />
      { playSong && (<MusicPlayer/> )}
    </div>
  );
};

export default HomePage;
