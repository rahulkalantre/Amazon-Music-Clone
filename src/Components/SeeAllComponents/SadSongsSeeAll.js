import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPlayCircle, BsThreeDots } from "react-icons/bs";
import "./SeeAllComponentsStyles/SeeAll.css";


function SadSongsSeeAll() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          'https://academics.newtonschool.co/api/v1/music/song?filter={"mood":"sad"}',
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
      <div className="allpotrait-title">
        <h1 className="allportrait-name">Sad Songs</h1>
      </div>
      <br />
      <div className="allportrait-card">
        {data.length > 0 &&
          data?.map((item, index) => (
            <div className="allportrait-data">
              <div>
                <img
                  src={item.artist[0]?.image}
                  alt="01 Slide"
                  style={{ width: "80%", height: "80%" }}
                  className="hover-image allportrait-img"
                />
              </div>

              <div className="overlay">
                <AiOutlinePlus className="icon1" />
                <BsPlayCircle className="icon2" />
                <BsThreeDots className="icon3" />
              </div>
              <h6 className="card-heading">{item?.title}</h6>
              {/* <p className="p-tag">{item.artist[0]?.description}</p> */}
            </div>
          ))}
      </div>
    </>
  );
}

export default SadSongsSeeAll;
