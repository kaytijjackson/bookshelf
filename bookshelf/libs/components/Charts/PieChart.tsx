"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { ChartContainer } from "./styles";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = ({
  title,
  labels,
  data,
  tooltipLabel,
  options,
}: {
  title: string;
  labels: string[];
  data: (number | undefined)[];
  tooltipLabel: string;
  options?: ChartOptions<'pie'>;
}) => {
  const pieChartData = {
    labels,
    datasets: [
      {
        label: tooltipLabel,
        data,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <ChartContainer>
      <h2>{title}</h2>
      <Pie data={pieChartData} options={options ? options : undefined} />
    </ChartContainer>
  );
};
