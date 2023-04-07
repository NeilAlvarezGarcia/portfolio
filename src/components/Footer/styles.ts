import styled from "styled-components";

import { COLORS } from "@/styles/colors";
import { Container } from "../styledComponents";
import { FLEX_COLUMN, FLEX_ROW } from "@/styles/commonStyles";
import { smScreen } from "@/styles/mediaQueries";
import { downToUpMove } from "@/styles/animations";

const FooterContainer = styled(Container)`
  ${FLEX_COLUMN}
  flex-direction: column-reverse;
  align-items: center;
  text-align: center;
  padding: 2rem 0;

  ${smScreen(`
    flex-direction: row;
    justify-content: space-between;
  `)};
`;

const FooterBtn = styled.button`
  ${FLEX_ROW}
  background-color: ${COLORS.mainColor};
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  cursor: pointer;

  &:hover svg {
    animation: ${downToUpMove("15%")} 1s ease-in-out;
  }
`;

export { FooterBtn, FooterContainer };
