"use client";

import { Page, VStack } from "@components";
import { useReadingHistory } from "@book-data";
import { HistoryTable } from "./HistoryTable";
import { Pagination } from "./Pagination";
import { useMemo, useState } from "react";
import { MAX_VISIBLE } from "./const";
import { HistoryList } from "./HistoryList";
import { useSearchParams } from "next/navigation";

const isInPageRange = (pageCount: number, pageRange: string | null) => {
  switch (pageRange) {
    case "<200":
      return pageCount < 200;
    case "200-299":
      return pageCount >= 200 && pageCount < 300;
    case "300-399":
      return pageCount >= 300 && pageCount < 400;
    case "400-499":
      return pageCount >= 400 && pageCount < 500;
    default:
      return pageCount > 500;
  }
};

export const HistoryPage = () => {
  const searchParams = useSearchParams();
  const history = useReadingHistory();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const filter = searchParams.get("filter");
  const type = searchParams.get("type");

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const sortedHistory = history.sort(
    (book1, book2) =>
      new Date(book2.endDate).getTime() - new Date(book1.endDate).getTime(),
  );

  const filterHistory = sortedHistory.filter((book) => {
    switch (filter) {
      case "genre":
        return book.genre === type;
      case "pageCount":
        return isInPageRange(book.pageCount, type);
      default:
        return true;
    }
  });

  const visibleBooks = useMemo(() => {
    return filterHistory.slice(
      (currentPage - 1) * MAX_VISIBLE,
      currentPage * MAX_VISIBLE,
    );
  }, [filterHistory, currentPage]);

  const totalPages = useMemo(
    () => Math.ceil(filterHistory.length / MAX_VISIBLE),
    [filterHistory],
  );

  return (
    <Page title="History">
      <VStack spacing={8}>
        <HistoryList history={visibleBooks} />
        <HistoryTable history={visibleBooks} />
        {filterHistory.length > MAX_VISIBLE && (
          <Pagination
            handleNext={handleNext}
            handlePrev={handlePrev}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </VStack>
    </Page>
  );
};

export default HistoryPage;
