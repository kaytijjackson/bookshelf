import { ReactNode } from "react";
import { NavMenu } from "../NavMenu/NavMenu";
import { Contents, PageContainer, TitleText } from "./styles";

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
