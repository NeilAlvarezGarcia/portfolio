import { clipPath, FLEX_ROW, transition } from "@/styles/commonStyles";
import styled from "styled-components";
import { Section } from "../styledComponents";

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

export { ModalSection };
