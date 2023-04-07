import { css } from "styled-components";

import { COLORS } from "./colors";

const FLEX_ROW = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const FLEX_ROW_BETWEEN = css`
  ${FLEX_ROW}
  justify-content: space-between;
`;

const FLEX_COLUMN = css`
  ${FLEX_ROW}
  flex-direction: column;
  align-items: flex-start;
`;

const SHADOW = css``;

const transition = css`
  transition: all 0.3s;
`;

const clipPath = (active: boolean) => css`
  ${active
    ? "clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);"
    : "clip-path: polygon(0 0, 100% 0%, 100% 0%, 0 0%);"}
`;

const mainBtn = css`
  width: fit-content;
  padding: 1rem 2.8rem;
  background-color: ${COLORS.mainColor};
  border-radius: 4rem;
  box-shadow: 0 0 1rem ${COLORS.mainColor};
  font-size: 1.6rem;
  color: ${COLORS.secondBgColor};
  letter-spacing: 0.1rem;
  font-weight: 600;
  ${transition}
  cursor: pointer;

  &:hover {
    box-shadow: none;
  }
`;

const border = css`
  border: 0.2rem solid ${COLORS.mainColor};
`;

export { FLEX_COLUMN, FLEX_ROW, FLEX_ROW_BETWEEN, SHADOW, transition, clipPath, mainBtn, border };
