import React from "react";
import "../HomePage/HomePage.css";
import AlbumDetailsPage from "../AlbumDetails/AlbumDetailsPage";
import SongDetailsPage from "../SongDetails/SongDetailsPage";
import RomanticSongsSeeAll from "../SeeAllComponents/RomanticSongsSeeAll";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import RomanticSongs from "../RomanticSongs/RomanticSongs";
import ExcitedSongs from "../ExcitedSongs/ExcitedSongs";
import HappySongs from "../HappySongs/HappySongs";
import SadSongs from "../SadSongs/SadSongs";
import TrendingSongs from "../TrendingSongs/TrendingSongs";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import SearchPage from "../SearchBar/SearchPage";


const HomePage = () => {
  return (
    <div className="home-page">
      <RomanticSongs />
      <ExcitedSongs />
      <HappySongs />
      <SadSongs />
      <TrendingSongs />
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <SearchPage /> */}
      {/* <MusicPlayer /> */}
      {/* <AlbumDetailsPage /> */}
      {/* <SongDetailsPage /> */}
      {/* <RomanticSongsSeeAll /> */}
    </div>
  );
};

export default HomePage;
