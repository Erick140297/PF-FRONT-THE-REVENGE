import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/SideBar/Header";
import Result from "./Components/Result/Result";
import Profile from "./Components/Profile/Profile";
import ProfileSettings from "./Components/ProfileSettings/ProfileSettings";
import LandingPage from "./Components/LandingPage/LandingPage";
import React, { useState, useEffect } from "react";
import RingLoader from "react-spinners/RingLoader";
import Cart from "./Components/Cart/Cart";
import Detail from "./Components/Detail/Detail";
import DashBoard from "./Components/DashBoard/DashBoard"
import User from "./Components/DashBoard/User/User"
import Product from "./Components/DashBoard/Products/Products"

import EditProductForm from "./Components/DashBoard/Products/EditProductForm/EditProductForm";

import About from "./Components/About/About";

import NewProductForm from "./Components/DashBoard/Products/NewProduct/NewProductForm";
import Payment from "./Components/Payment/Payment";
import Decline from "./Components/Decline/Decline";
import CreateAdmin from "./Components/DashBoard/User/CreateAdmin/CreateAdmin";
import Orders from "./Components/DashBoard/Orders/Orders";
import AdminOrderEdit from "./Components/DashBoard/Orders/AdminOrderEdit/AdminOrderEdit";

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
          <Route exact path="/profileSettings" component={ProfileSettings} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/detail/:id" component={Detail} />
          <Route exact path="/dashboard" component={DashBoard} />
          <Route exact path="/admin/user" component={User} />
          <Route exact path="/admin/orders" component={Orders} />
          <Route exact path="/order/update/:id" component={AdminOrderEdit} />
          <Route exact path="/admin/products" component={Product} />
          <Route exact path="/admin/products/form" component={NewProductForm} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/decline" component={Decline} />

          <Route exact path="/admin/products/edit/:id" component={EditProductForm} />

          <Route exact path="/about" component={About} />
          <Route exact path="/admin/createAdmin" component={CreateAdmin} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
