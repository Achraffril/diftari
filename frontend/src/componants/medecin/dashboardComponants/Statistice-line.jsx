import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const labels = ["2024-01-01", "2024-02-01", "2024-03-01", "2024-04-01", "2024-05-01", "2024-06-01"];

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Nombre de consultation",
          backgroundColor: "#176B87",
          borderColor: "#176B87",
          data: [0, 10, 25, 30, 20, 30, 45],
        }
      ],
    };

    const configLineChart = {
      type: "line",
      data: data,
      options: {},
    };

    const myChart = new Chart(chartRef.current, configLineChart);

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="shadow-lg rounded-lg overflow-hidden bg-white">
      <div className="py-3 px-5 bg-gray-50 flex justify-between"><span> Nombre de consultation </span><span>7Jour</span> </div>
      <canvas className="p-10 " ref={chartRef}></canvas>
    </div>
  );
};

export default LineChart;

