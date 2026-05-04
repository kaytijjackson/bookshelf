"use client";

import { Page, VStack } from "@components";
import { useReadingHistory } from "@book-data";
import { HistoryTable } from "./HistoryTable";
import { Pagination } from "./Pagination";
import { useMemo, useState } from "react";
import { MAX_VISIBLE } from "./const";
import { HistoryList } from "./HistoryList";

export const HistoryPage = () => {
  const history = useReadingHistory();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const totalPages = useMemo(
    () => Math.ceil(history.length / MAX_VISIBLE),
    [history],
  );

  const visibleBooks = useMemo(() => {
    return history.slice(
      (currentPage - 1) * MAX_VISIBLE,
      currentPage * MAX_VISIBLE,
    );
  }, [history, currentPage]);

  return (
    <Page title="History Page">
      <VStack spacing={8}>
        <HistoryList history={visibleBooks} />
        <HistoryTable history={visibleBooks} />
        <Pagination
          handleNext={handleNext}
          handlePrev={handlePrev}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </VStack>
    </Page>
  );
};

export default HistoryPage;
