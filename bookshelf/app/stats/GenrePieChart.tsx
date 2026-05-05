"use client";

import { CompletedBookType } from "@book-data";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { ChartContainer } from "./styles";

ChartJS.register(ArcElement, Tooltip, Legend);

export const formatGenreData = (history: CompletedBookType[]) => {
  return history?.reduce((acc: Partial<Record<string, number>>, val) => {
    const genre: string = val.genre;

    if (acc[genre]) {
      acc[genre] = acc[genre] + 1;
    } else {
      acc[genre] = 1;
    }

    return acc;
  }, {});
};

export const GenrePieChart = ({
  history,
}: {
  history: CompletedBookType[];
}) => {
  const genreData = formatGenreData(history);

  const labels = Object.keys(genreData);
  const data = Object.values(genreData);

  const pieChartData = {
    labels,
    datasets: [
      {
        label: "Genre",
        data,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <ChartContainer>
      <h2>By Genre</h2>
      <Pie data={pieChartData} />
    </ChartContainer>
  );
};

export default GenrePieChart;
