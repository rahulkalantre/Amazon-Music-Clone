import React, { useState, useEffect } from "react";
import { ApiUrl } from "../../Data/ApiUrl";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchPage from "../SearchBar/SearchPage";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { useMusicPlayer } from "../../Context/MusicPlayerProvider";
import "../SuggetionPage/SuggestionPage.css"

function SuggestionPage() {
  const [data, setData] = useState([]);
  const { query } = useParams();
  const { playSong, songDetails, isPlaying, setSongDetails, setIsPlaying, setPlaySong, currentindex, setCurrentIndex } = useMusicPlayer()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${ApiUrl.songList}?search={"title":"${query}"}`,
          {
            method: "GET",
            headers: {
              projectId: "edlpgt620a4c",
            },
          }
        );
        const json = await response.json();
        console.log(json.data);
        setData(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    if (query.trim() !== "") {
      fetchData();
    }
  }, [query]);
  console.log(data);
  return (
    <>
    <h2 className="suggestion-heading"> Songs Search By Title </h2>
      {query.trim() === "" ? (
        <SearchPage />
      ) : (
        <div className="grid-containerr">
          {data.length > 0 ? (
            data?.map((item, index) => (
              <div className="grid-itemm" key={index}
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
                    className="grid-imagee"
                    src={item.thumbnail}
                  />
                  <h3 className="grid-titlee"> {item.title} </h3>
                  <p className="grid-artistt"> Mood: {item.mood} </p>
              </div>
            ))
          ) : (
            <p>No Results Found</p>
          )}
        </div>
      )}
      { playSong && (<MusicPlayer/> )}
    </>
  );
}
export default SuggestionPage;
