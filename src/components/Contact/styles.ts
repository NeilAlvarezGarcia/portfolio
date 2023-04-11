import styled, { css } from "styled-components";

import { COLORS } from "@/styles/colors";
import { FLEX_COLUMN, FLEX_ROW, mainBtn, transition } from "@/styles/commonStyles";
import { mdScreen, setMediaQueryWidth, lgScreen, setMediaQueryHeight } from "@/styles/mediaQueries";

import { Container } from "../styledComponents";

const inputStyles = css`
  border-radius: 1rem;
  padding: 1rem;
  background-color: ${COLORS.transparent};
  border: ${COLORS.white} solid thin;
  color: ${COLORS.white};
  font-size: 1.6rem;
  letter-spacing: 0.2rem;
`;

const ContactContainer = styled(Container)`
  ${FLEX_COLUMN}
  gap: 2rem;

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

const FormContainer = styled.div`
  ${FLEX_COLUMN}
  align-items: center;
  width: 90%;
  max-width: 60rem;
  max-height: 80%;
  gap: 1rem;

  h2 {
    text-align: center;
  }
`;

const FormStyled = styled.form`
  ${FLEX_COLUMN}
  justify-content: flex-start;
  align-items: unset;
  gap: 3rem;
  width: 100%;
  overflow-y: auto;
`;

const Group = styled.div`
  ${FLEX_COLUMN}
  align-items: unset;
  gap: 1rem;
`;

const GroupLabel = styled.label`
  color: ${COLORS.mainColor};
  font-size: 1.8rem;
  font-weight: 600;
`;

const GroupInput = styled.input`
  ${inputStyles}
`;

const GroupTextArea = styled.textarea`
  ${inputStyles}
  max-height: 10rem;
  resize: none;

  ${setMediaQueryHeight("837px", "max-height: unset;")}
`;

const SubmitButton = styled.button`
  ${FLEX_ROW}
  background-color: ${COLORS.white};
  border-radius: 1rem;
  padding: 1rem;
  color: ${COLORS.bgColor};
  font-weight: 600;
  font-size: 1.6rem;
  text-transform: uppercase;
  cursor: pointer;
  ${transition}

  &:hover {
    box-shadow: 0 0 1rem ${COLORS.white};
  }

  ${mdScreen(`
    padding: 1.2rem 2rem;    
    margin: 0 auto;
  `)}
`;

export {
  ContactContainer,
  ContactContent,
  ContactBtnContainer,
  EmailBtn,
  WhatsBtn,
  BtnContainer,
  FormContainer,
  FormStyled,
  Group,
  GroupLabel,
  GroupInput,
  GroupTextArea,
  SubmitButton,
};
