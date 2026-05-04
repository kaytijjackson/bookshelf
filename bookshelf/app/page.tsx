import { Page } from "@/libs/components";
import { useGetCurrentRead } from "@/libs/data/useGetCurrentRead";

export default function Home() {
  const title = useGetCurrentRead();
  return (
    <Page title="Dashboard">
      <span>current reade: </span>
    </Page>
  );
}
