import styled from "styled-components";

import { COLORS } from "@/styles/colors";
import { FLEX_ROW } from "@/styles/commonStyles";
import { setMediaQueryWidth } from "@/styles/mediaQueries";

const P = styled.p`
  font-size: 1.6rem;
  line-height: 1.7;
  color: ${COLORS.white};
`;

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1.3;

  ${setMediaQueryWidth("970px", "font-size: 3.8rem")}
`;

const SubTitle = styled.h2`
  color: ${COLORS.white};
  font-size: 3.2rem;

  & span {
    color: ${COLORS.mainColor};
  }
`;

const SubTitle2 = styled.h3`
  font-size: 2.2rem;
`;

const Section = styled.section<{ bg?: string }>`
  ${FLEX_ROW}
  background-color: ${({ bg }) => bg || COLORS.bgColor};
`;

const Container = styled.div`
  width: 85%;
  padding: 5rem 0;
  max-width: 120rem;
`;

export { P, Title, SubTitle, Section, Container, SubTitle2 };
