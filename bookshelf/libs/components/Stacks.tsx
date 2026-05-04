import styled from "styled-components";

export const HStack = styled.div<{ spacing?: number }>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.spacing || 0}px;
`;

export const VStack = styled.div<{ spacing?: number }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.spacing || 0}px;
`;