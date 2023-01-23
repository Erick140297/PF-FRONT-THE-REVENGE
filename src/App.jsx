import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/SideBar/Header";
import Result from "./Components/Result/Result";
import Profile from "./Components/Profile/Profile";
import LandingPage from "./Components/LandingPage/LandingPage";
import React, { useState, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";
import Cart from "./Components/Cart/Cart";
import Detail from "./Components/Detail/Detail";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <div className="otracosa">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Header} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/detail/:_id" component={Detail} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
