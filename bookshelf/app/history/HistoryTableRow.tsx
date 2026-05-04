import { CompletedBookType } from "@book-data";
import { format } from "date-fns";

export const HistoryTableRow = ({ book }: { book: CompletedBookType }) => {
  const { id, title, author, genre, rating, endDate } = book;

  const date = format(endDate, 'MMM d, yyyy');

  return (
    <tr key={id}>
      <td>{title}</td>
      <td>{author}</td>
      <td>{genre}</td>
      <td>{rating}</td>
      <td>{date}</td>
    </tr>
  );
};
