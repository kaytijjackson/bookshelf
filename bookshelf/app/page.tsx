import { Page, VStack } from "@components";
import { useCurrentRead, useReadingGoal, useReadingHistory } from "@book-data";
import { ProgressBar } from "@components";

export const Home = () => {
  const currentYear = new Date().getFullYear();
  const book = useCurrentRead();
  const history = useReadingHistory();
  const goal = useReadingGoal();

  const booksYTD = history.reduce((acc: number, val) => {
    const endDate = new Date(val.endDate);

    if (endDate.getFullYear() === currentYear) {
      acc = acc + 1;
    }

    return acc;
  }, 0);

  return (
    <Page title="Dashboard">
      <VStack spacing={8}>
        <span>Currently reading: {book.title}</span>
        <VStack spacing={4}>
          <span>Reading Goal: {booksYTD} of {goal}</span>
          <ProgressBar currentAmount={booksYTD} totalAmount={goal} />
        </VStack>
      </VStack>
    </Page>
  );
};

export default Home;
