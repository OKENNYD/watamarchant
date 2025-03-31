import React, { useState } from 'react'
import ReactApexChart from "react-apexcharts";
export default function Pie() {
    const [data, setData] = useState({
        series: [44, 55, 13, 43, 22],
        options: {
          chart: {
            type: "pie",
          },
          labels: ["Clothing", "Food Products", "Electronics", "Home Utility", "Catering"],
        },
      })
  return (
    <div>
        <ReactApexChart
            options={data.options}
            series={data.series}
            type="pie"
            height={300}
        />
    </div>
  )
}
