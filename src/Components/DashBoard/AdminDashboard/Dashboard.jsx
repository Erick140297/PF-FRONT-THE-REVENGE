import { Chart } from "./Chart";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProducts, getUser } from "../../../Redux/Actions";
import { NavLink } from "react-router-dom"; 
import "./Dashboard.css";
import DashboardSold from "./DashboardSold";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function AdminDashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllProducts());
    dispatch(getUser());
  }, []);

  let allProductsStock = useSelector((state) => state.allProducts);
  const allStock = allProductsStock.map((product) => ({
    name: product.name,
    stock: product.stock,
  }));

  let allProductsBackup = useSelector((state) => state.allProducts);
  const allCategory = allProductsBackup.map((product) => product.category);
 
  let allUsersBackup = useSelector((state) => state.usersAdmin);
  const allUser = allUsersBackup.map((user) => user.enabled);
  // console.log(allUser)

  const countOcurrences = (arr) =>
    arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
    // console.log("!!!!!!!", countOcurrences(allUser))
  const data = {
    datasets: [
      {
        label: "Category",
        data: countOcurrences(allCategory),
        borderWidth: "8",
        backgroundColor: [
          "#ffbb11",
          "#ca4040",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
  };
  const data3 = {
    datasets: [
      {
        label: "Users",
        data: countOcurrences(allUser),
        borderWidth: "8",
        backgroundColor: [
          "#29bd15",
          "#ca4040",
        ],
      },
    ],
  };

  const data2 = {
    labels: allStock.map((product) => product.name),
    datasets: [
      {
        label: "Stock",
        data: allStock.map((product) => product.stock),
        backgroundColor: [
          "#ffbb11",
          "#ca4040",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
  };

  // console.log("AllStock", allCategory);
  // console.log("aaaaaaa", countOcurrences);

  return (
    <div>
      <NavLink to="/dashboard">
        <button className="btnAbout">Volver</button>
      </NavLink>
      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="container6"
        fill
      >
        <Tab eventKey="category" title="Category">
          <Chart className="chart" chartData={data} />
        </Tab>
        <Tab eventKey="products" title="Products">
          <Chart className="chart2" chartData={data2} />
        </Tab>
        <Tab eventKey="longer-users" title="Users">
          <Chart className="chart" chartData={data3} />
        </Tab>
        {/* <Tab eventKey="contact" title="Contact"></Tab> */}
      </Tabs>
    </div>
  );
}

export default AdminDashboard;
