'use client'

import styled from "styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  font-weight: ${props => props.$isActive ? "bold" : "normal"};
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export const NavMenu = () => {
  const currentPath = usePathname();
  console.log('currentPath', currentPath);

  return (
    <NavContainer>
      <NavLink href="/" target="_self" $isActive={currentPath === "/"}>
        Dashboard
      </NavLink>
      <NavLink href="/history" target="_self" $isActive={currentPath === "/history"}>
        History
      </NavLink>
    </NavContainer>
  );
};
