import React, { useEffect, useState } from "react";
import { BsFillPlayFill, BsThreeDots } from "react-icons/bs";
import { GrFormAdd } from "react-icons/gr";
import { BiSolidShareAlt } from "react-icons/bi";
import { AiOutlinePlus, AiOutlinePlayCircle } from "react-icons/ai";
import "../AlbumDetails/AlbumDetailsPage.css";
import MusicPlayer from "../MusicPlayer/MusicPlayer";

const AlbumDetailsPage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("id");
  const [isHovered, setIsHovered] = useState(false);
  const [data, setData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  const [playSong, setPlaySong] = useState(false);
  const [songDetails, setSongDetails] = useState({});
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/music/artist/${myParam}`,
          {
            method: "GET",
            headers: {
              projectId: "knjxpr9vh9wr",
            },
          }
        );
        const json = await response.json();
        console.log(json);
        let romanticSongs = json.data.songs.filter(
          (item) => item.mood === "romantic"
        );
        setData(romanticSongs);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <div className="adp-background">
        <div className="adp-card">
          <img src={data?.thumbnail} alt="image-new" className="adp-image" />
          <div className="adp-content">
            <h6 className="adp-subtitle">PLAYLIST</h6>
            <h1 className="adp-title">{data[0]?.mood.toUpperCase()} SONGS</h1>
            <h5 className="adp-tagline">Curated by Amazon Music</h5>
            {/* <p className="adp-description">{data?.description}</p> */}
            <br />
            <p>50 SONGS • 3 HOURS AND 27 MINUTES</p>
            <div className="actions">
              <button className="adp-play-button">
                <BsFillPlayFill /> Play
              </button>
              <button className="adp-icon-button">
                <GrFormAdd />
              </button>
              <button className="adp-icon-button">
                <BiSolidShareAlt />
              </button>
              <button className="adp-icon-button">
                <BsThreeDots />
              </button>
            </div>
          </div>
        </div>
        {data.length > 0 &&
          data.map((item, index) => (
            <div
              className="adp-song-card"
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(-1)}
            >
              <div className="adp-song-info" key={index}>
                <div className="adp-song-number">{index}</div>
                <img
                  src={item?.thumbnail}
                  alt="album-banner"
                  className="adp-song-image"
                  onClick={() => {
                    setPlaySong(true);
                    setSongDetails({
                      img: item?.thumbnail || "",
                      title: item?.title || "",
                      artist: item?.artist[0]?.name || "",
                      songs: data || [],
                      index: index,
                    });
                  }}
                />
                {isHovered === index && (
                  <div className="adp-play-icon">
                    <AiOutlinePlayCircle className="adp-play-icon-inner" />
                  </div>
                )}
                <div className="adp-song-text">
                  <h5>{item?.title}</h5>
                  <p> Artist : Unknown</p>
                </div>
              </div>
              <div className="adp-song-title">
                <p>{item?.title}</p>
              </div>
              <div className="adp-duration">3.43</div>
              <div className="adp-icons">
                <AiOutlinePlus className="adp-icon" />
                <BsThreeDots className="adp-icon" />
              </div>
            </div>
          ))}
      </div>
      {playSong && (
        <MusicPlayer
          songDetails={songDetails}
          setSongDetails={setSongDetails}
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
        />
      )}
    </>
  );
};

export default AlbumDetailsPage;
