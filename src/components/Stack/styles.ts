import styled from "styled-components";

import { COLORS } from "@/styles/colors";
import { border, FLEX_COLUMN, mainBtn, transition } from "@/styles/commonStyles";
import { mdScreen, smScreen } from "@/styles/mediaQueries";
import { Container } from "../styledComponents";

const StackContainer = styled(Container)`
  ${FLEX_COLUMN}
  align-items: center;
  gap: 3rem;
`;

const StackCards = styled.div`
  ${FLEX_COLUMN}
  gap: 4rem;

  ${smScreen(`
    flex-direction: row;
  `)}

  ${mdScreen(`
    max-width: 70rem;
  `)}
`;

const CardContianer = styled.div`
  background-color: ${COLORS.secondBgColor};
  padding: 2rem;
  border-radius: 1.5rem;
  ${FLEX_COLUMN}
  align-items: center;
  text-align: center;
  gap: 2rem;
  border: 0.25rem solid transparent;
  ${transition}

  &:hover {
    ${border}
  }
`;

const CardBtn = styled.button`
  ${mainBtn}
`;

export { StackContainer, StackCards, CardContianer, CardBtn };
