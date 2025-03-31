"use client";
import Area from "@/components/Charts/Area";
import Bar from "@/components/Charts/Bar";
import Line from "@/components/Charts/Line";
import Pie from "@/components/Charts/Pie";
import React from "react";
import ReactApexChart from "react-apexcharts";
export default function Analytics() {
  return (
    <div className="w-full h-auto box-border">
      {/* Top Stats */}
      <div className="w-full flex">
        <div className="w-1/3 h-36 bg-white rounded-xl shadow p-4 m-1">
          <h3 className="text-lg font-bold">$424,652</h3>
          <p className="text-sm text-gray-500">Sales</p>
          <ReactApexChart
            options={{ chart: { type: "line", sparkline: { enabled: true } } }}
            series={[{ data: [10, 20, 15, 30, 25, 40, 35] }]}
            type="line"
            height={50}
          />
        </div>
        <div className="w-1/3 h-36 bg-white rounded-xl shadow p-4 m-1">
          <h3 className="text-lg font-bold">$235,312</h3>
          <p className="text-sm text-gray-500">Expenses</p>
          <ReactApexChart
            options={{ chart: { type: "line", sparkline: { enabled: true } } }}
            series={[{ data: [15, 10, 20, 25, 30, 35, 40] }]}
            type="line"
            height={50}
          />
        </div>
        <div className="w-1/3 h-36 bg-white rounded-xl shadow p-4 m-1">
          <h3 className="text-lg font-bold">$135,965</h3>
          <p className="text-sm text-gray-500">Profits</p>
          <ReactApexChart
            options={{ chart: { type: "line", sparkline: { enabled: true } } }}
            series={[{ data: [5, 15, 10, 20, 15, 25, 30] }]}
            type="line"
            height={50}
          />
        </div>
      </div>
      {/* Charts Section */}
      <div className="w-full flex">
        {/* Monthly Sales */}
        <div className="bg-white w-1/2 h-auto m-2 rounded-xl shadow p-2">
          <h3 className="text-base font-bold mb-2">Monthly Sales</h3>
          <Bar/>
        </div>

        {/* Department Sales */}
        <div className="bg-white w-1/2 h-auto m-2 rounded-xl shadow p-2">
          <h3 className="text-base font-bold mb-2">Department Sales</h3>
          <Pie/>
        </div>
      </div>
      <div className="w-full flex">
        {/* Daily Visits Insights */}
        <div className="bg-white w-1/2 h-auto m-2 rounded-xl shadow p-2">
          <h3 className="text-base font-bold mb-2">Daily Visits Insights</h3>
          <Area/>
        </div>

        {/* Customers */}
        <div className="bg-white w-1/2 h-auto m-2 rounded-xl shadow p-2">
          <h3 className="text-base font-bold mb-2">Customers</h3>
          <Line/>
        </div>
      </div>
    </div>
  );
}