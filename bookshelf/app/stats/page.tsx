import { Page } from "@components";
import { useReadingHistory } from "@book-data"
import GenrePieChart from "./GenrePieChart";

export default function StatsPage() {
    const history = useReadingHistory();
    return (
        <Page title="Reading Breakdown">
            <GenrePieChart history={history} />
        </Page>
    )
}