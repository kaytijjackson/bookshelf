import { CompletedBookType } from "@/libs/data";
import { HeaderCell, StyledTable } from "./styles";
import { formatDate } from "date-fns";

export const HistoryTable = ({ history }: { history: CompletedBookType[] }) => {
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
        {history.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
            <td>{book.rating}</td>
            <td>{formatDate(book.endDate, "MMM d, yyyy")}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};
