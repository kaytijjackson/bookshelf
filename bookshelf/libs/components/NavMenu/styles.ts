import Link from "next/link";
import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled(Link)<{ $isActive: boolean }>`
  font-weight: ${props => props.$isActive ? "bold" : "normal"};
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;