import styled from "styled-components";

import {
  lgScreen,
  mdScreen,
  prefersReducedMotion,
  setMediaQueryHeight,
} from "@/styles/mediaQueries";
import { Container, SubTitle } from "../styledComponents";
import { border, FLEX_COLUMN, FLEX_ROW, mainBtn, transition } from "@/styles/commonStyles";
import { COLORS } from "@/styles/colors";
import { appearing, HomeImageAnimation, upToDownMove } from "@/styles/animations";

const Header = styled.header`
  ${FLEX_ROW}
`;

const HomeSection = styled(Container)`
  margin-top: 8rem;
  ${FLEX_COLUMN}
  align-items: center;
  gap: 6rem;
  animation: ${appearing} 4s;

  ${mdScreen(`
    flex-direction: row;
    height: 100vh;
  `)}

  @media (min-width: 768px) {
    ${setMediaQueryHeight("730px", "margin-top: 0")}
  }

  ${prefersReducedMotion()}
`;

const HomeContent = styled.div`
  flex: 1;
  ${FLEX_COLUMN}
  gap: 3rem;
  animation: ${upToDownMove} 3s;
  ${prefersReducedMotion()}
`;

const HomeImage = styled.div`
  flex: 1;
  animation: ${HomeImageAnimation} 3s infinite;

  & img {
    box-shadow: 1rem 1rem 3rem ${COLORS.mainColor};
    border-radius: 1rem;
  }
`;

const HomeSubtitle = styled(SubTitle)`
  font-size: 2.2rem;
  font-weight: 700;
`;

const SocialMediaContainer = styled.div`
  ${FLEX_ROW}
  gap: 2rem;
`;

const SocialMediaBtn = styled.a`
  ${FLEX_ROW}
  width: 4.5rem;
  height: 4.5rem;
  background-color: transparent;
  ${border}
  border-radius: 50%;
  ${transition}

  &:hover {
    background-color: ${COLORS.mainColor};
    box-shadow: 0 0 1rem ${COLORS.mainColor};
  }

  &:hover svg path {
    fill: var(--second-bg-color);
  }

  ${lgScreen(`
    width: 5rem;
    height: 5rem;
  `)}
`;

const CVBtn = styled.a`
  ${mainBtn}
`;

export {
  Header,
  HomeSection,
  HomeContent,
  HomeImage,
  HomeSubtitle,
  CVBtn,
  SocialMediaContainer,
  SocialMediaBtn,
};
