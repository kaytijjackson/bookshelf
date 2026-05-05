import { Page } from "@components";
import { useReadingHistory } from "@book-data";
import { GenrePieChart } from "./GenrePieChart";
import { PageCountPieChart } from "./PageCountPieChart";
import { ChartsContainer } from './styles';

export default function StatsPage() {
  const history = useReadingHistory();
  return (
    <Page title="Reading Breakdown">
      <ChartsContainer>
        <GenrePieChart history={history} />
        <PageCountPieChart history={history} />
      </ChartsContainer>
    </Page>
  );
}
