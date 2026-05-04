import { ReactNode } from "react";
import { NavMenu } from "./NavMenu";
import styled from "styled-components";

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  width: 100%;
  padding: 16px;
  height: 100vh;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Contents = styled.div`
  grid-column: 2/3;

  @media screen and (max-width: 768px) {
    grid-column: none;
  }
`;

const TitleText = styled.h1`
  font-size: 32px;
`;

export const Page = ({
  title,
  children,
}: {
  title?: string;
  children: ReactNode;
}) => (
  <PageContainer>
    <Contents>
      <NavMenu />
      {title && (
        <header>
          <TitleText>{title}</TitleText>
        </header>
      )}
      <main>{children}</main>
    </Contents>
  </PageContainer>
);
