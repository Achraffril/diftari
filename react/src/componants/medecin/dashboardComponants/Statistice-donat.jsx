import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DoughnutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const dataDoughnut = {
      labels: ["Homme", "Enfant", "Femme"],
      datasets: [
        {
          label: "consultation",
          data: [200, 50, 150],
          backgroundColor: [
            "#5AB2FF",
            "#A0DEFF",
            "#E1AFD1",
          ],
          hoverOffset: 4,
        },
      ],
    };

    const configDoughnut = {
      type: "doughnut",
      data: dataDoughnut,
      options: {},
    };

    const chartDoughnut = new Chart(chartRef.current, configDoughnut);

    return () => {
      chartDoughnut.destroy();
    };
  }, []);

  return (
    <div className="shadow-lg rounded-lg overflow-hidden bg-white px-20" >
 
      <canvas className="p-2" ref={chartRef}></canvas>
    </div>
  );
};

export default DoughnutChart;
