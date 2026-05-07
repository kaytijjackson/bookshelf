'use client'

import { CompletedBookType } from "@book-data";
import { PieChart } from "@components";
import { ActiveElement, ChartEvent } from "chart.js";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const genreData = formatGenreData(history);

  const labels = Object.keys(genreData);
  const data = Object.values(genreData);

  const options = {
    onClick: (_event: ChartEvent, elements: ActiveElement[]) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        const genreFilter = labels[index];
        // TODO: Add cypress test for navigation
        router.push(`/history?filter=genre&type=${genreFilter}`);
      }
    }
  };

  return (
    <PieChart
      title="By Genre"
      tooltipLabel="Genre"
      labels={labels}
      data={data}
      options={options}
    />
  );
};

export default GenrePieChart;
