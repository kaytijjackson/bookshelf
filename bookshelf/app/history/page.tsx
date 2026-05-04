import { Page } from "@components";
import { useReadingHistory } from "@book-data";

export const HistoryPage = () => {
  const history = useReadingHistory();

  return (
    <Page title="History Page">
      {history.map(({ title, id }) => (
        <p key={id}>{title}</p>
      ))}
    </Page>
  );
};

export default HistoryPage;
