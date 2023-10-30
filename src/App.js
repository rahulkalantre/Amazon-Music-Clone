import React from "react";
import { Route, Routes } from "react-router-dom";
import AlbumDetailsPage from "./Components/AlbumDetails/AlbumDetailsPage";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import HomePage from "./Components/HomePage/HomePage";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import SearchPage from "./Components/SearchBar/SearchPage";
import SuggetionPage from "./Components/SuggetionPage/SuggetionPage";

import RomanticSongsSeeAll from "./Components/SeeAllComponents/RomanticSongsSeeAll";
import ExcitedSongsSeeAll from "./Components/SeeAllComponents/ExcitedSongsSeeAll";
import HappySongsSeeAll from "./Components/SeeAllComponents/HappySongsSeeAll";
import SadSongsSeeAll from "./Components/SeeAllComponents/SadSongsSeeAll";
import AleartPage from "./Components/AleartPage/AleartPage";
import PodCasts from "./Components/PodCasts/PodCasts";

const App = () => {
  return (
    <>
    <NavigationBar />
      <Routes>
        <Route exact path="/"  element={<HomePage />} />
        <Route exact path="/albumDetailsPage" element={<AlbumDetailsPage />} />
        <Route path="/romanticSongsSeeAll" element={<RomanticSongsSeeAll/>} />
        <Route path="/excitedSongsSeeAll" element={<ExcitedSongsSeeAll />} />
        <Route path="/happySongsSeeAll" element={<HappySongsSeeAll />} />
        <Route path="/sadSongsSeeAll" element={<SadSongsSeeAll />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/search" element={<SearchPage />} /> */}
        <Route path="search/:query" element={<SuggetionPage />} />
        <Route path="/aleartPage" element={<AleartPage />} />
        <Route path="/podCasts" element={<PodCasts />} />
      </Routes>
    </>
  );
};

export default App;
