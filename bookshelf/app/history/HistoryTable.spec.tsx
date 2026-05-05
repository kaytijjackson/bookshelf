import { render, screen } from "@testing-library/react";
import { HistoryTable } from "./HistoryTable";
import { CompletedBookType } from "@book-data";

const history: CompletedBookType[] = [
  {
    id: "1",
    title: "Book title",
    author: "Author 1",
    rating: 4,
    endDate: "2026-01-01",
    genre: "Fantasy",
  },
];

describe("HistoryTable", () => {
  it("should render", () => {
    render(<HistoryTable history={history} />);
    expect(screen.getByRole('cell', { name: 'Book title' })).toBeVisible();
    expect(screen.getByRole('cell', { name: 'Author 1' })).toBeVisible();
    expect(screen.getByRole('cell', { name: '4' })).toBeVisible();
    expect(screen.getByRole('cell', { name: 'Jan 1, 2026' })).toBeVisible();
    expect(screen.getByRole('cell', { name: 'Fantasy' })).toBeVisible();
  });
});
