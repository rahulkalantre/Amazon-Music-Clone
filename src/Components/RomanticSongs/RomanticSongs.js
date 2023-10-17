import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../RomanticSongs/RomanticSongs.css";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPlayCircle, BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";

function RomanticSongs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"romantic"}',
          {
            method: "GET",
            headers: {
              projectId: "knjxpr9vh9wr",
            },
          }
        );
        const json = await response.json();
        console.log(json);
        setData(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="romantic-songs-title">
        <h1 className="romantic-songs-heading">Romantic Songs</h1>
        <Link to="/romanticSongsSeeAll">
          <div className="see-all-button">
            <button className="see-all-btn">SEE ALL</button>
          </div>
        </Link>
      </div>
      <br />
      <Carousel
        className="romantic-songs-carousel"
        showArrows={true} // Show navigation arrows
        showStatus={true} // Hide status indicator
        showThumbs={false} // Hide thumbnail images
        infiniteLoop={true} // Enable infinite loop
        centerMode={true} // Center the current slide
        centerSlidePercentage={11} // Show three items at a time
        emulateTouch={false}
      >
        {data.length > 0 &&
          data?.map((item, index) => (
            <Link
              to={`/albumDetailsPage?id=${item?.artist[0]?._id}`}
              params={item?.artist[0]?._id}
            >
              <div className="song-card">
                <div>
                  <img
                    src={item.artist[0]?.image}
                    alt="01 Slide"
                    style={{ width: "80%", height: "80%" }}
                    className="song-image song-card"
                  />
                </div>

                <div className="romantic-song-overlay">
                  <AiOutlinePlus className="icon-plus" />
                  <BsPlayCircle className="icon-play" />
                  <BsThreeDots className="icon-dots" />
                </div>
                <h6 className="romantic-song-card-heading">{item?.title}</h6>
                <p className="description">{item.artist[0]?.description}</p>
              </div>
            </Link>
          ))}
      </Carousel>
    </>
  );
}

export default RomanticSongs;
