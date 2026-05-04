import { Page } from "@/libs/components";
import { useGetCurrentRead } from "@book-data";

export const Home = () => {
  const book = useGetCurrentRead();

  return (
    <Page title="Dashboard">
      <span>Current read: {book.title}</span>
    </Page>
  );
}

export default Home;