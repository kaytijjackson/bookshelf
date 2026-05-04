import styled from "styled-components";
import Link from "next/link";

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled(Link)``;

export const NavMenu = () => (
  <NavContainer>
    <NavLink href="/" target="_self">
      Dashboard
    </NavLink>
    <NavLink href="/history" target="_self">
      History
    </NavLink>
  </NavContainer>
);
