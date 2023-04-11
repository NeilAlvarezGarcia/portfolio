import styled from "styled-components";

import { COLORS } from "@/styles/colors";
import { border, FLEX_COLUMN, FLEX_ROW, mainBtn, transition } from "@/styles/commonStyles";
import { lgScreen, mdScreen, setMediaQueryWidth, smScreen } from "@/styles/mediaQueries";
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
  height: 28rem;

  img {
    height: 30rem;
    width: 100%;
  }

  ${lgScreen(`
    &:hover > div {
      transform: translateY(0%);
    }
  `)}
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

  ${lgScreen("transform: translateY(150%);")}
`;

const ProjectCardLink = styled.a`
  min-height: 4rem;
  min-width: 4rem;
  background-color: ${COLORS.white};
  ${FLEX_ROW}
  border-radius: 50%;
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
