import { render, screen } from "@testing-library/react";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  it("should render", () => {
    const handleNext = jest.fn();
    const handlePrev = jest.fn();
    const totalPages = 5;
    const currentPage = 2;

    render(
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        totalPages={totalPages}
        currentPage={currentPage}
      />,
    );

    const prevButton = screen.getByRole('button', { name: 'Prev' });
    expect(prevButton).toBeDefined();
  });
});
