import Chart from "react-apexcharts";
import React from "react";

const options = {
  chart: {
    id: "basic-bar",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
    colors: ['#d72240']
};
const series = [
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
];

export default function LineGraph() {
  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="line"
        width="98%"
      />
    </div>
  );
}
