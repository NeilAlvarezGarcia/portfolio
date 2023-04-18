import styled from "styled-components";

import { COLORS } from "@/styles/colors";
import { border, FLEX_COLUMN, FLEX_ROW, mainBtn, transition } from "@/styles/commonStyles";
import { lgScreen, mdScreen, setMediaQueryHeight, setMediaQueryWidth } from "@/styles/mediaQueries";
import { Container } from "../styledComponents";

const StackContainer = styled(Container)`
  ${FLEX_COLUMN}
  align-items: center;
  gap: 3rem;
`;

const StackCards = styled.div`
  ${FLEX_COLUMN}
  gap: 4rem;

  ${mdScreen(`
    flex-direction: row;
    max-width: 70rem;
  `)}
`;

const CardContianer = styled.div`
  background-color: ${COLORS.secondBgColor};
  padding: 2rem;
  flex: 1;
  max-width: 33rem;
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

const LatestProjectsSection = styled.section`
  ${FLEX_COLUMN}
  align-items: center;
  justify-content: flex-start;
  gap: 4rem;
  height: 100%;
  padding: 3rem 0 4rem;
`;

const LatestProjectsContainer = styled.div`
  flex: 1;
  width: 90%;
  display: grid;
  overflow-y: auto;
  padding-bottom: 1rem;
  grid-template-columns: 1fr;
  gap: 3rem;

  ${setMediaQueryWidth(
    "650px",
    `
    grid-template-columns: repeat(2, 1fr);
  `
  )}
  ${lgScreen("grid-template-columns: repeat(3, 1fr);")}
`;

const ProjectCardContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
  height: 20rem;
  max-width: 38rem;

  img {
    height: 28rem;
    width: 100%;
  }

  ${lgScreen(`
    &:hover > div {
      transform: translateY(0%);
    }
  `)}

  @media (min-width: 1024px) {
    ${setMediaQueryHeight("720px", "height: 23rem;")}
    ${setMediaQueryHeight("800px", "height: 25rem;")}
    ${setMediaQueryHeight("900px", "height: 28rem;")}
  }
`;

const ProjectCardContent = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, ${COLORS.mainColor}, rgba(0, 0, 0, 0.4));
  ${FLEX_COLUMN}
  align-items: center;
  padding: 2rem;
  gap: 1rem;
  text-align: center;
  ${transition}
  cursor: pointer;
  user-select: none;

  ${lgScreen("transform: translateY(150%);")}
`;

const ProjectCardLink = styled.a`
  padding: 1rem 1.5rem;
  background-color: ${COLORS.white};
  ${FLEX_ROW}
  border-radius: 1rem;
  color: ${COLORS.black};
  font-weight: 600;
  font-size: 1.4rem;
`;

export {
  StackContainer,
  StackCards,
  CardContianer,
  CardBtn,
  LatestProjectsSection,
  LatestProjectsContainer,
  ProjectCardContainer,
  ProjectCardContent,
  ProjectCardLink,
};
