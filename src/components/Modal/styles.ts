import styled from "styled-components";

import { clipPath, FLEX_ROW, mainBtn, transition } from "@/styles/commonStyles";
import { Container, Section } from "../styledComponents";
import { COLORS } from "@/styles/colors";

const ModalSection = styled(Section)<{ active: boolean }>`
  ${({ active }) => clipPath(active)}

  position: fixed;
  z-index: 3;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  ${transition}
  ${FLEX_ROW}
`;

const ModalContainer = styled(Container)`
  background-color: ${COLORS.secondBgColor};
  border-radius: 2rem;
  height: 90vh;
  padding: 0;
  ${FLEX_ROW}
`;

const CloseBtn = styled.button`
  ${mainBtn}
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export { ModalSection, ModalContainer, CloseBtn };
