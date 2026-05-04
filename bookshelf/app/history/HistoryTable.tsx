import { CompletedBookType } from "@book-data";
import { HeaderCell, StyledTable } from "./styles";
import { TABLE_HEADERS } from "./const";
import { formatDate } from "@utils";

export const HistoryTable = ({ history }: { history: CompletedBookType[] }) => (
  <StyledTable>
    <thead>
      <tr>
        {Object.values(TABLE_HEADERS).map((header) => (
          <HeaderCell key={header}>{header}</HeaderCell>
        ))}
      </tr>
    </thead>
    <tbody>
      {history.map((book) => (
        <tr key={book.id}>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.genre}</td>
          <td>{book.rating}</td>
          <td>{formatDate(book.endDate)}</td>
        </tr>
      ))}
    </tbody>
  </StyledTable>
);
