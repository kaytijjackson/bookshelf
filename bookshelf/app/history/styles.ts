import { HStack, VStack } from "@components";
import styled from "styled-components";

// History Table
export const StyledTable = styled.table`
  width: 100%;

  td:last-of-type,
  th:last-of-type {
    text-align: right;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderCell = styled.th`
  text-align: left;
`;

// History List
export const List = styled(VStack).attrs({ spacing: 8 })`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const ListItem = styled(VStack).attrs({ spacing: 4 })`
  > div {
    justify-content: space-between;
  }
`;

export const Divider = styled.hr`
  border-top: 1px solid grey;
`;

// Pagination
export const PaginationRow = styled(HStack).attrs({ spacing: 8 })`
  justify-content: end;
  align-self: end;
`;

export const PaginationButton = styled.button<{ disabled: boolean }>`
  color: ${(props) => (props.disabled ? "grey" : "black")};
  outline: 1px solid ${(props) => (props.disabled ? "grey" : "black")};
  border-radius: 1px;
  padding: 4px;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${(props) => (props.disabled ? "transparent" : "silver")};
  }
`;
