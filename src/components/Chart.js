import React from "react";
import { Pie } from "react-chartjs-2";

export default function Charts() {
  const data = {
    labels: ["within TAT", "outside TAT", "outside TAT", "within TAT"],
    datasets: [
      {
        label: "TAT",
        data: [53, 25, 14, 32],
        backgroundColor:[
            '#d81b1b',
            '#90ee90',
            '#008000',
            '#ffa500',
          ]
      },
    ],
  };

  return (
    <div>
      <Pie data={data} className="pie" options={{ maintainAspectRatio: true }} />
    </div>
  );
}
