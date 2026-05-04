"use client";

import { CompletedBookType } from "@/libs/data";
import { useMemo, useState } from "react";
import { HistoryTableRow } from "./HistoryTableRow";
import { HeaderCell, StyledTable } from "./styles";

const MAX_VISIBLE = 5;

export const HistoryTable = ({ history }: { history: CompletedBookType[] }) => {
  const [page, setPage] = useState(1);

  const visibleBooks = useMemo(() => {
    return history.slice((page - 1) * MAX_VISIBLE, page * MAX_VISIBLE);
  }, [history, page]);

  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrev = () => {
    setPage(page - 1);
  };

  return (
    <StyledTable>
      <thead>
        <tr>
          <HeaderCell>Title</HeaderCell>
          <HeaderCell>Author</HeaderCell>
          <HeaderCell>Genre</HeaderCell>
          <HeaderCell>Rating</HeaderCell>
          <HeaderCell>Date</HeaderCell>
        </tr>
      </thead>
      <tbody>
        {visibleBooks.map((book) => (
          <HistoryTableRow key={book.id} book={book} />
        ))}
      </tbody>
    </StyledTable>
  );
};
