import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import {getAllProductSold} from "../../Actions";
import { Chart } from "./Chart";
import './Dashboard.css'

function DashboardSold() {
     const dispatch = useDispatch()

    //  useEffect(() => {
    //     dispatch(getAllProductSold())
    //  },[])

    const {allProducts} =  useSelector(state => state)


    const allProduct = allProducts.map(product => product.allProducts)


    const countOcurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
    const data = {
      datasets: [
        {
          label: "Ventas",
          data: countOcurrences(allProduct),
          borderWidth: "2",
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
  
  return (
    <div className="container">
      <Chart className="chart" chartData={data} />
    </div>
  )
}

export default DashboardSold