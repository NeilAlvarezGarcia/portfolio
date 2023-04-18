import styled from "styled-components";

import { Container } from "../styledComponents";
import { COLORS } from "@/styles/colors";
import { FLEX_COLUMN, mainBtn } from "@/styles/commonStyles";
import { mdScreen } from "@/styles/mediaQueries";

const AboutContainer = styled(Container)`
  ${FLEX_COLUMN}
  align-items: unset;

  ${mdScreen(`
    flex-direction: row;
    align-items: center
  `)}

  gap: 5rem;
`;

const AboutContent = styled.div`
  flex: 2;
  ${FLEX_COLUMN}
  gap: 2rem;
`;

const AboutImg = styled.picture`
  flex: 1;

  & img {
    width: 100%;
    border-radius: 2rem;
    box-shadow: -1rem 1rem 3rem ${COLORS.mainColor};
  }
`;

const AboutBtn = styled.button`
  ${mainBtn}
`;

export { AboutContainer, AboutBtn, AboutContent, AboutImg };
