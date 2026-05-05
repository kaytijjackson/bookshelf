import { CompletedBookType } from "@book-data";
import { PieChart } from "@components";

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

  return (
    <PieChart
      title="By Genre"
      tooltipLabel="Genre"
      labels={labels}
      data={data}
    />
  );
};

export default GenrePieChart;
