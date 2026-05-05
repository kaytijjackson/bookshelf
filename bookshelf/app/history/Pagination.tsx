import { PaginationButton, PaginationRow } from "./styles";

export const Pagination = ({
  handleNext,
  handlePrev,
  currentPage,
  totalPages,
}: {
  handleNext: () => void;
  handlePrev: () => void;
  currentPage: number;
  totalPages: number;
}) => {
  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;
  
  return (
    <PaginationRow>
      <PaginationButton
        onClick={handlePrev}
        disabled={isPrevDisabled}
        aria-disabled={isPrevDisabled}
      >
        Prev
      </PaginationButton>
      <PaginationButton
        onClick={handleNext}
        disabled={isNextDisabled}
        aria-disabled={isNextDisabled}
      >
        Next
      </PaginationButton>
    </PaginationRow>
  );
};
