import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import { BsPlayCircle, BsThreeDots } from "react-icons/bs"
import { useMusicPlayer } from "../../Context/MusicPlayerProvider"
import { TrendingSongsFunction } from "../../Data/ApiFunctions"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../TrendingSongs/TrendingSongs.css"

const TrendingSongs = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 500,
    rows: 3,
    slidesPerRow: 1,
  };

  const { playSong, songDetails, isPlaying, setSongDetails, setIsPlaying, setPlaySong, currentindex, setCurrentIndex } = useMusicPlayer()
  const [data, setData] = useState([]);

  useEffect(() => {
    TrendingSongsFunction({setData});
  }, []);

  return (
    <>
      <div className="trending-playlists">
        <h2 className="playlist-heading">Trending Playlists</h2>
        {/* <div className="see-all-button">
          <button className="see-all-btn">SEE ALL</button>
        </div> */}
      </div>
      <br />
      <Slider {...settings}>
        {data.length > 0 &&
          data?.map((item, index) => (
            <div
              className="playlist-item"
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
                src={item?.thumbnail}
                alt="01 Slide"
                className="playlist-image"
              />
              <BsPlayCircle className="play-icon" />
              <div className="playlist-details">
                <h5 className="playlist-title">{item?.title}</h5>
                <p className="playlist-artists">
                  {item?.artist.map((text) => text?.name).join(", ")}
                </p>
              </div>
            </div>
          ))}
      </Slider>
    </>
  );
};

export default TrendingSongs;
