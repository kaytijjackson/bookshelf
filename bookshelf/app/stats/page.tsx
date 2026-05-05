import { HStack, Page } from "@components";
import { useReadingHistory } from "@book-data";
import { GenrePieChart } from "./GenrePieChart";
import { PageCountPieChart } from "./PageCountPieChart";

export default function StatsPage() {
  const history = useReadingHistory();
  return (
    <Page title="Reading Breakdown">
      <HStack>
        <GenrePieChart history={history} />
        <PageCountPieChart history={history} />
      </HStack>
    </Page>
  );
}
