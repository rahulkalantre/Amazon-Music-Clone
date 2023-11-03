import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPlayCircle, BsThreeDots } from "react-icons/bs";
import "./SeeAllComponentsStyles/SeeAll.css";

function ExcitedSongsSeeAll() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/music/song?page=${page}&limit=100`,
          {
            method: "GET",
            headers: {
              projectId: "knjxpr9vh9wr",
            },
          }
        );
        const json = await response.json();
        console.log(json);
        setData((prev) => [...prev, ...json.data]);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [page]);

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 10 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <div className="allpotrait-title">
        <h1 className="allportrait-name">Excited Songs</h1>
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

export default ExcitedSongsSeeAll;

// useEffect(() => {
//   // iife function
//   (async () => {
//     const getData = await fetchApiData(
//       `${ApiUrl["ListShows"]}?filter={"type": "${itemcategery}"}&page=${page}&limit=20`
//     );
//     if (getData.status == "success") {
//       setData((prev) => [...prev, ...getData.data]);
//     } else {
//       alert(getData.message);
//     }
//   })();
// }, [page]);


