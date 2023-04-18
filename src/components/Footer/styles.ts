import styled, { keyframes } from "styled-components";

import { COLORS } from "@/styles/colors";
import { Container } from "../styledComponents";
import { FLEX_COLUMN, FLEX_ROW } from "@/styles/commonStyles";
import { mdScreen, smScreen } from "@/styles/mediaQueries";

const ArrowLogoAnimation = keyframes`
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(-30%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const FooterContainer = styled(Container)`
  ${FLEX_COLUMN}
  gap: 3rem;
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
    animation: ${ArrowLogoAnimation} 0.8s ease-out;
  }
`;

const CallBtn = styled.a`
  ${FLEX_ROW}
  font-size: 2rem;

  ${mdScreen(`display: none`)}
`;

export { FooterBtn, FooterContainer, CallBtn };
