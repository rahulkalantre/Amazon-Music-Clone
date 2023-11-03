import React from "react";
import "../HomePage/HomePage.css";
import TrendingSongs from "../TrendingSongs/TrendingSongs";
import CardComponents from "../CardComponents/CardComponents";
import MusicPlayerNew from "../MusicPlayerNew/MusicPlayerNew";
// import UserIcon from "../UserIcon/UserIcon";

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
  
  return (
    <div className="home-page">
      {
         arr?.map((item, index) => {
          return <CardComponents newData = {item} />
        })
      }
      <TrendingSongs />
    </div>
  );
};

export default HomePage;
