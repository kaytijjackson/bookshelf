import { CompletedBookType } from "@/libs/data";
import { useReadingHistory } from "../../libs/data/useReadingHistory";
import { HistoryPage } from "./page";
import { render, screen } from "@testing-library/react";

jest.mock("../../libs/data/useReadingHistory");

const generateMockBook: (id: string) => CompletedBookType = (id: string) => {
  return {
    id,
    title: `test book ${id}`,
    author: `author ${id}`,
    genre: "Fantasy",
    rating: 3,
    endDate: "2026-01-01",
  };
};

describe("History", () => {
  it("should render", () => {
    const mockHistory = Array.from(new Array(6), (_, index) =>
      generateMockBook(index.toString()),
    );
    jest.mocked(useReadingHistory).mockReturnValue(mockHistory);

    render(<HistoryPage />);
    // expect mobile and web
    expect(screen.getAllByText("test book 0")).toHaveLength(2);
    expect(screen.queryByText('test book 5')).toBeNull();
    expect(screen.getByRole('button', { name: 'Prev' })).toBeDefined();
  });

  it("should not render prev/next buttons if less than max", () => {
    const mockHistory = [generateMockBook('1')];
    jest.mocked(useReadingHistory).mockReturnValue(mockHistory);

    render(<HistoryPage />);
    // expect mobile and web
    expect(screen.getAllByText("test book 1")).toHaveLength(2);
    expect(screen.queryByRole('button', { name: 'Prev' })).toBeNull();
  });
});
