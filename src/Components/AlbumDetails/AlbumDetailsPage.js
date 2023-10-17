import React, { useEffect, useState } from "react";
import { BsFillPlayFill, BsThreeDots } from "react-icons/bs";
import { GrFormAdd } from "react-icons/gr";
import { BiSolidShareAlt } from "react-icons/bi";
import { AiOutlinePlus, AiOutlinePlayCircle } from "react-icons/ai";
import "../AlbumDetails/AlbumDetailsPage.css";
// import "./Styles/SongDetailsPage.css";

const AlbumDetailsPage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("id");
  // console.log(myParam);
  // const { id } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [data, setData] = useState([]);
  const [songsData, setSongsData] = useState([]);

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
        setData(json.data.songs);
        setSongsData(json.data?.songs || []);
        // setHeading(json.data[0].mood)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <div className="adp-background-color">
        <div className="adp-image-card">
          <img src={data?.thumbnail} alt="image-new" className="adp-image" />
          <div className="content">
            <h6 className="adp-h6-tag">PLAYLIST</h6>
            <h1 className="adp-heading">50 Most Played: Hindi</h1>
            <h5 className="adp-h5-tag">Curated by Amazon Music</h5>
            <p className="adp-p-tag">{data?.description}</p>
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
              className="sdp-image-card"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="sdp-image-container" key={index}>
                <div className="sdp-image-number">{index}</div>
                <img
                  src={item?.thumbnail}
                  alt="album-banner"
                  className="sdp-image"
                />
                {/* {console.log(item.thumbnail)} */}
                {isHovered && (
                  <div className="play-icon">
                    <AiOutlinePlayCircle className="play-icon-inner" />
                  </div>
                )}
                <div className="sdp-text-container">
                  <h3>{item?.title}</h3>
                  <p> Artist : Unknown</p>
                </div>
              </div>
              <div className="sdp-heading"><p>{item?.title}</p></div>
              <div className="sdp-duration">3.43</div>
              <div className="sdpa-icons">
                <AiOutlinePlus className="sdp-icon" />
                <BsThreeDots className="sdp-icon" />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default AlbumDetailsPage;
