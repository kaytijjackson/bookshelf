import { render, screen } from "@testing-library/react";
import { HistoryList } from "./HistoryList";
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

describe("HistoryList", () => {
  it("should render", () => {
    render(<HistoryList history={history} />);
    expect(screen.getByText('Book title')).toBeDefined();
    expect(screen.getByText('Author 1')).toBeDefined();
    expect(screen.getByText('4')).toBeDefined();
    expect(screen.getByText('Jan 1, 2026')).toBeDefined();
    expect(screen.getByText('Fantasy')).toBeDefined();
  });
});
