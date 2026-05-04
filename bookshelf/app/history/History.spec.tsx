import { useReadingHistory } from "@/libs/data";
import { HistoryPage } from "./page";
import { render, screen } from "@testing-library/react";

jest.mock("@book-data");

describe("History", () => {
  beforeEach(() => {
    jest.mocked(useReadingHistory).mockReturnValue([
      {
        id: "1",
        title: "test book 1",
        author: "author 1",
        genre: "Fantasy",
        rating: 3,
        endDate: "2026-01-01",
      },
    ]);
  });

  it("should render", () => {
    render(<HistoryPage />);
    expect(screen.getByText("test book 1")).toBeDefined();
  });
});
