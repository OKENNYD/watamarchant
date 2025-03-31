"use client"
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function Radial() {
  const [data, setData] = useState({
    series: [44, 55, 67, 83],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          borderRadius: 50,
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return w;
              }
            }
          }
        }
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    },
  });

  return (
      <ReactApexChart options={data.options} series={data.series} type="radialBar" height={350} />
  );
}