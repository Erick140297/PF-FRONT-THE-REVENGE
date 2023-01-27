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
import DashBoard from "./Components/DashBoard/DashBoard"
import User from "./Components/DashBoard/User/User"
import Product from "./Components/DashBoard/Products/Products"

import NewProductForm from "./Components/DashBoard/Products/NewProduct/NewProductForm";

import Payment from "./Components/Payment/Payment";
import Decline from "./Components/Decline/Decline";




function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <Header/>       
        <div className="otracosa">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/dashboard" component={DashBoard} />
          <Route exact path="/admin/user" component={User} />
          <Route exact path="/admin/products" component={Product} />
          <Route exact path="/admin/products/form" component={NewProductForm} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/decline" component={Decline} />
         
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
