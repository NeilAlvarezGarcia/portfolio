import { COLORS } from "@/styles/colors";
import { FLEX_COLUMN, FLEX_ROW, mainBtn } from "@/styles/commonStyles";
import { mdScreen, setMediaQueryWidth, smScreen } from "@/styles/mediaQueries";
import styled from "styled-components";
import { Container } from "../styledComponents";

const ContactContainer = styled(Container)`
  ${FLEX_COLUMN}

  ${mdScreen(`
    flex-direction: row;
    align-items: center;
  `)}
`;

const ContactContent = styled.div`
  ${FLEX_COLUMN}
  flex: 1;
`;

const ContactBtnContainer = styled.div`
  ${FLEX_COLUMN}
  flex: 1;
  width: 100%;

  & p {
    font-weight: 600;
    font-size: 2rem;
  }
`;

const BtnContainer = styled.div`
  ${FLEX_COLUMN}
  width: 100%;

  ${setMediaQueryWidth("473px", `flex-direction: row;`)}

  ${mdScreen(`flex-direction: column;`)}

  ${setMediaQueryWidth("970px", `flex-direction: row;`)}

  gap: 2rem;
`;

const WhatsBtn = styled.a`
  ${mainBtn}
  ${FLEX_ROW}
  background-color: ${COLORS.green};
  box-shadow: 0 0 1rem ${COLORS.green};
  color: ${COLORS.white};
  flex: 1;
  width: 100%;
`;

const EmailBtn = styled.button`
  ${mainBtn}
  ${FLEX_ROW}
  flex: 1;
  width: 100%;
`;

export { ContactContainer, ContactContent, ContactBtnContainer, EmailBtn, WhatsBtn, BtnContainer };
