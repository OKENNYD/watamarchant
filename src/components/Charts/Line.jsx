import {useState} from 'react'
import ReactApexChart from "react-apexcharts";
export default function Line() {
    const [data, setData] = useState({
        series: [
          {
            name: "Customers",
            data: [120, 200, 150, 300, 250, 400, 350],
          },
        ],
        options: {
          chart: {
            type: "line",
            height: 350,
            toolbar: {
              show: true,
            },
          },
          stroke: {
            curve: "smooth",
            width: 2,
          },
          markers: {
            size: 5,
            colors: ["#6787e7"],
            strokeColors: "#fff",
            strokeWidth: 2,
            hover: {
              size: 7,
            },
          },
          xaxis: {
            categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            title: {
              text: "Days of the Week",
            },
          },
          yaxis: {
            title: {
              text: "Number of Customers",
            },
          },
          tooltip: {
            enabled: true,
            theme: "light",
          },
          colors: ["#6787e7"],
          grid: {
            borderColor: "#e7e7e7",
            strokeDashArray: 5,
          },
        },
      })
  return (
    <ReactApexChart
      options={data.options}
      series={data.series}
      type="line"
      height={300}
    />
  )
}
