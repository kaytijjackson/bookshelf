import { Progress } from "radix-ui";
import styled from "styled-components";

export const ProgressRoot = styled(Progress.Root)`
  position: relative;
  height: 16px;
  width: 100%;
  max-width: 400px;
  overflow: hidden;
  border-radius: 9999px;
  background-color: #e5e7eb;
`;

export const ProgressIndicator = styled(Progress.Indicator)`
  height: 100%;
  width: 100%;
  background-color: #36A2EB;
  transition: transform 300ms ease-out;
`;
