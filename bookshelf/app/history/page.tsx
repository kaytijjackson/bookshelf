import { Page } from "@components";
import { useReadingHistory } from "@book-data";
import { HistoryTable } from "./HistoryTable";

export const HistoryPage = () => {
  const history = useReadingHistory();

  return (
    <Page title="History Page">
      <HistoryTable history={history} />

      {/* <Pagination /> */}
    </Page>
  );
};

export default HistoryPage;
