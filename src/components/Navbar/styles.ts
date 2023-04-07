import styled from "styled-components";

import { COLORS } from "@/styles/colors";

import {
  clipPath,
  FLEX_COLUMN,
  FLEX_ROW,
  FLEX_ROW_BETWEEN,
  transition,
} from "@/styles/commonStyles";

import { mdScreen } from "@/styles/mediaQueries";

const NavSection = styled.section<{ active: boolean }>`
  position: fixed;
  top: 0;
  z-index: 2;
  background-color: ${COLORS.bgColor};
  width: 100vw;
  ${FLEX_ROW}
  ${transition}
  clip-path: polygon(0 0, 100% 0%, 100% 22%, 0 22%);

  ${({ active }) => active && "clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);"}

  ${mdScreen(`
    clip-path: none;
  `)}
`;

const NavContainer = styled.div`
  ${FLEX_ROW_BETWEEN}
  gap: 0;
  flex-wrap: wrap;
  width: 100%;
  padding: 2rem;

  ${mdScreen(`
    width: 90%;
  `)}
`;

const LogoContainer = styled.h2`
  ${FLEX_ROW}
  gap: 0.5rem;
  font-size: 2rem;
  font-weight: 600;
`;

const LogoImage = styled.picture`
  width: 4rem;
  height: 4rem;
`;

const MenuBtn = styled.button`
  ${FLEX_ROW}
  background-color: ${COLORS.transparent};
  cursor: pointer;

  ${mdScreen(`
    display: none;
  `)}
`;

const Nav = styled.div`
  ${FLEX_COLUMN}
  align-items: unset;
  width: 100%;
  gap: 3rem;
  padding: 3rem 0;
  ${transition}

  ${mdScreen(`
     flex-direction: row;
     width: fit-content;
     padding: 0;
     gap: 5.5rem;
  `)}
`;

const NavBtn = styled.button<{ active: boolean }>`
  color: #fff;
  font-size: 1.7rem;
  ${transition}
  background-color: ${COLORS.transparent};
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    color: ${COLORS.mainColor};
  }

  ${({ active }) =>
    active &&
    `
    background-color: ${COLORS.secondBgColor};
    color: ${COLORS.mainColor};    
  `}

  ${mdScreen(`
    background-color: ${COLORS.transparent};
  `)}
`;

export { NavSection, NavContainer, LogoContainer, LogoImage, MenuBtn, Nav, NavBtn };
