import { CompletedBookType } from "@book-data";
import { PieChart } from "@components";

const getSize = (pageCount: number) => {
  if (pageCount < 200) {
    return "< 200";
  }

  if (pageCount >= 200 && pageCount < 300) {
    return "200-300";
  }

  if (pageCount >= 300 && pageCount < 400) {
    return "300-400";
  }

  if (pageCount >= 400 && pageCount < 500) {
    return "400-500";
  }

  return "500+";
};

export const formatPageCountData = (history: CompletedBookType[]) => {
  return history?.reduce((acc: Partial<Record<string, number>>, val) => {
    const pageCount: number = val.pageCount;
    const size = getSize(pageCount);

    if (acc[size]) {
      acc[size] = acc[size] + 1;
    } else {
      acc[size] = 1;
    }

    return acc;
  }, {});
};

export const PageCountPieChart = ({
  history,
}: {
  history: CompletedBookType[];
}) => {
  const pageCountData = formatPageCountData(history);

  const labels = Object.keys(pageCountData);
  const data = Object.values(pageCountData);

  return (
    <PieChart
      title="By Page Count"
      tooltipLabel="Page Count"
      labels={labels}
      data={data}
    />
  );
};
