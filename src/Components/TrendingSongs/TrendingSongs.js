import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../TrendingSongs/TrendingSongs.css";
import Slider from "react-slick";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPlayCircle, BsThreeDots } from "react-icons/bs";

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

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://academics.newtonschool.co/api/v1/music/album",
          {
            method: "GET",
            headers: {
              projectId: "knjxpr9vh9wr",
            },
          }
        );
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="trending-playlists">
        <h2 className="playlist-heading">Trending Playlists</h2>
        <div className="see-all-button">
          <button className="see-all-btn">SEE ALL</button>
        </div>
      </div>
      <br />
      <Slider {...settings}>
        {data.length > 0 &&
          data?.map((item, index) => (
            <div className="playlist-item">
              <img src={item?.image} alt="01 Slide" className="playlist-image" />
              <BsPlayCircle className="play-icon"/>
              <div className="playlist-details">
                <h5 className="playlist-title">{item?.title}</h5>
                <p className="playlist-artists">
                  {item?.artists.map((text) => text?.name).join(", ")}
                </p>
              </div>
            </div>
          ))}
      </Slider>
    </>
  );
};

export default TrendingSongs;
