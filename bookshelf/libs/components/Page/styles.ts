import styled from "styled-components";
import { VStack } from "../Stacks";

export const PageContainer = styled.div`
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

export const Contents = styled(VStack)`
  grid-column: 2/3;

  @media screen and (max-width: 768px) {
    grid-column: none;
  }
`;

export const TitleText = styled.h1`
  font-size: 32px;
`;