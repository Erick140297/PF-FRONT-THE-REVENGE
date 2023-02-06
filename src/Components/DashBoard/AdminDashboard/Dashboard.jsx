import { Chart } from "./Chart";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProducts, getUser } from "../../../Redux/Actions"

import "./Dashboard.css";
import DashboardSold from "./DashboardSold";

function AdminDashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( GetAllProducts());
    dispatch( getUser());
  }, []);

  let allProductsStock = useSelector((state) => state.allProducts);
  const allStock = allProductsStock.map(product => ({name:product.name, stock :product.stock}));

  
  let allProductsBackup = useSelector((state) => state.allProducts);
  const allCategory = allProductsBackup.map((product) => product.category);

  const countOcurrences = (arr) =>
    arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
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


  
  const data2 = {
    labels: allStock.map(product => product.name),
    datasets: [
      {
        label: "Stock",
        data: allStock.map(product => product.stock),
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
  
  console.log("AllStock", allCategory)
  console.log("aaaaaaa", countOcurrences)
  return (
    <div className="container">
      <div className="containerTitle">
        <h2>Estadísticas</h2>
      </div>
      <div className="containerAllEstadisticas">
        <div className="containerEstadisticas">
          <Chart className="chart" chartData={data}  />
        </div>
        <div className="containerEstadisticas">
          <Chart className="chart2" chartData={data2}  />
        </div>
        <div className="containerEstadisticas">
          <DashboardSold></DashboardSold>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
