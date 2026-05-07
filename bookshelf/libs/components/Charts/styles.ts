import styled from "styled-components";
import { VStack } from "../Stacks";

export const ChartContainer = styled(VStack).attrs({ spacing: 8 })`
    width: 350px;
    max-height: auto;
    align-items: center;

    @media screen and (max-width: 768px) {
        max-width: 300px;
    }
`;