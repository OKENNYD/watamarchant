import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function Area() {
    const [data, setData] = useState({
        series: [
          {
            name: "Day Time",
            data: [31, 40, 28, 51, 42, 109, 100],
          },
          {
            name: "Night Time",
            data: [11, 32, 45, 32, 34, 52, 41],
          },
        ],
        options: {
          chart: {
            type: "area",
            height: 350,
          },
          xaxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
        },
      })
    
  return (
    <ReactApexChart
      options={data.options}
      series={data.series}
      type="area"
      height={300}
    />
  )
}
