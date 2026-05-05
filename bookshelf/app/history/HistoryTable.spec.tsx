import { render, screen } from "@testing-library/react";
import { HistoryTable } from "./HistoryTable";
import { CompletedBookType } from "@/libs/data";

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
    expect(screen.getByRole('cell', { name: 'Book title' })).toBeDefined();
    expect(screen.getByRole('cell', { name: 'Author 1' })).toBeDefined();
    expect(screen.getByRole('cell', { name: '4' })).toBeDefined();
    expect(screen.getByRole('cell', { name: 'Jan 1, 2026' })).toBeDefined();
    expect(screen.getByRole('cell', { name: 'Fantasy' })).toBeDefined();
  });
});
