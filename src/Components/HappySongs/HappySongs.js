import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../HappySongs/HappySongs.css";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { Link } from "react-router-dom";

function HappySongs() {
  const [data, setData] = useState([]);
  // const [heading, setHeading] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"happy"}',
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
        // setHeading(json.data[0].mood)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <div className="happy-songs-title">
        <h1 className="happy-songs-heading">Happy Songs</h1>
        <Link to="/happySongsSeeAll">
          <div className="see-all-button">
            <button className="see-all-btn">SEE ALL</button>
          </div>
        </Link>
      </div>
      <br />
      <Carousel
        className="happy-songs-carousel"
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
                <img
                  src={item.artist[0]?.image}
                  alt="01 Slide"
                  style={{ width: "80%", height: "80%" }}
                  className="song-image song-card"
                />
                <div className="happy-song-overlay">
                  <TfiArrowCircleRight className="icon-play" />
                </div>
                <h6 className="happy-song-card-heading">{item?.title}</h6>
                <p className="description">{item.artist[0]?.description}</p>
              </div>
            </Link>
          ))}
      </Carousel>
    </>
  );
}

export default HappySongs;
