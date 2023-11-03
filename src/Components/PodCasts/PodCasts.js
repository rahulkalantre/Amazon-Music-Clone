import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { useMusicPlayer } from "../../Context/MusicPlayerProvider";
import "../PodCasts/PodCasts.css";

const PodCasts = () => {
  const [data, setData] = useState([]);
  const { playSong, songDetails, isPlaying, setSongDetails, setIsPlaying, setPlaySong, currentindex, setCurrentIndex } = useMusicPlayer()

  const actionHandler = (mood) => {
    async function fetchData() {
      try {
        const url = `https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"${mood}"}`;
        const getData = await fetch(url, {
          method: "GET",
          headers: {
            projectID: "edlpgt620a4c",
          },
        });
        const json = await getData.json();
        console.log(json.data);
        setData(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  };

  return (
    <div className="podcast-page">
      <h4 className="waiting-heading">PodCasts Are Coming Soon Till Enjoy...</h4>
      <h2 className="search-heading-mood">Songs Based On Moods</h2>
      <div className="mood-button-container">
        <button
          className="mood-button happy"
          onClick={() => actionHandler("happy")}
        >
          Happy
        </button>

        <button
          className="mood-button sad"
          onClick={() => actionHandler("sad")}
        >
          Sad
        </button>

        <button
          className="mood-button romantic"
          onClick={() => actionHandler("romantic")}
        >
          Romantic
        </button>

        <button
          className="mood-button excited"
          onClick={() => actionHandler("excited")}
        >
          Excited
        </button>
      </div>
      <div className="grid-container">
        {data.length > 0 &&
          data?.map((item, index) => (
            <div className="grid-item"
              onClick={() => {
                    setPlaySong(true);
                    setIsPlaying(true)
                    setSongDetails({
                      img: item?.thumbnail || "",
                      title: item?.title || "",
                      artist: item?.artist[0]?.name || "",
                      songs: data || [],
                      index: index,
                    });
                    setCurrentIndex(index)
                  }}
            >
              <img
                src={item.artist[0]?.image}
                alt="image001"
                className="grid-item-image"
              />
              <h2 className="grid-item-title"> {item?.title} </h2>
            </div>
          ))}
      </div>
      { playSong && (<MusicPlayer/> )}
    </div>
  );
};

export default PodCasts;
