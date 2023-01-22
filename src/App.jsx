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


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      
      {loading ? (
        <div className="loading">
          <RingLoader
            color={"#5f36d6"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <NavBar />
          <div className="otracosa">
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home" component={Header} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/result" component={Result} />
            <Route exact path="/profile" component={Profile} />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
