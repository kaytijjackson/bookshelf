import styled from "styled-components";

// History Table
export const StyledTable = styled.table`
  width: 100%;

  td:last-of-type,
  th:last-of-type {
    text-align: right;
  }
`;

export const HeaderCell = styled.th`
  text-align: left;
`;

// Pagination
export const PaginationRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: end;
  align-self: end;
`;

export const PaginationButton = styled.button<{ disabled: boolean }>`
  color: ${(props) => (props.disabled ? "grey" : "black")};
  outline: 1px solid ${(props) => (props.disabled ? "grey" : "black")};
  border-radius: 1px;
  padding: 4px;
`;
