"use client";

import { usePathname } from "next/navigation";
import { NavContainer, NavLink } from "./styles";

export const NavMenu = () => {
  const currentPath = usePathname();

  return (
    <NavContainer>
      <NavLink href="/" target="_self" $isActive={currentPath === "/"}>
        Dashboard
      </NavLink>
      <NavLink
        href="/history"
        target="_self"
        $isActive={currentPath === "/history"}
      >
        History
      </NavLink>
    </NavContainer>
  );
};
