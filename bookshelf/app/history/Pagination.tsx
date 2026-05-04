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
  return (
    <PaginationRow>
      <PaginationButton onClick={handlePrev} disabled={currentPage === 1}>
        Prev
      </PaginationButton>
      <PaginationButton
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </PaginationButton>
    </PaginationRow>
  );
};
