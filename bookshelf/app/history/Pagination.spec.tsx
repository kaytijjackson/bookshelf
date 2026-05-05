import { render, screen } from "@testing-library/react";
import { Pagination } from "./Pagination";
import userEvent from '@testing-library/user-event'

describe("Pagination", () => {
  it("should render", () => {
    const handleNext = jest.fn();
    const handlePrev = jest.fn();

    render(
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        totalPages={5}
        currentPage={2}
      />,
    );

    const prevButton = screen.getByRole('button', { name: 'Prev' });
    expect(prevButton).toBeVisible();
    expect(prevButton).not.toBeDisabled();

    const nextButton = screen.getByRole('button', { name: 'Next' });
    expect(nextButton).toBeVisible();
    expect(nextButton).not.toBeDisabled();
  });

  it('should fire button events', async () => {
    const handleNext = jest.fn();
    const handlePrev = jest.fn();

    render(
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        totalPages={5}
        currentPage={2}
      />,
    );

    const user = userEvent.setup()

    const prevButton = screen.getByRole('button', { name: 'Prev' });
    const nextButton = screen.getByRole('button', { name: 'Next' });

    await user.click(prevButton);
    
    expect(handlePrev).toHaveBeenCalled();

    await user.click(nextButton);
    expect(handleNext).toHaveBeenCalled();
  });

  it('should disable prev button if first page', () => {
    const handleNext = jest.fn();
    const handlePrev = jest.fn();

    render(
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        totalPages={5}
        currentPage={1}
      />,
    );
    expect(screen.getByRole('button', { name: 'Prev' })).toBeDisabled();
  });

  it('should disable next button if last page', () => {
    const handleNext = jest.fn();
    const handlePrev = jest.fn();

    render(
      <Pagination
        handleNext={handleNext}
        handlePrev={handlePrev}
        totalPages={3}
        currentPage={3}
      />,
    );
    expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled();
  });
});
