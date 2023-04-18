import styled, { css } from "styled-components";

import { COLORS } from "@/styles/colors";
import { FLEX_COLUMN, FLEX_ROW, mainBtn, transition } from "@/styles/commonStyles";
import { mdScreen, setMediaQueryWidth, lgScreen, setMediaQueryHeight } from "@/styles/mediaQueries";

import { Container, SubTitle } from "../styledComponents";

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
  max-height: 85%;
  width: 100%;
  gap: 1rem;

  h2 {
    text-align: center;
    padding: 0 1rem;
  }
`;

const ScrollableDiv = styled.div`
  ${FLEX_ROW}
  align-items: flex-start;
  width: 100%;
  overflow-y: auto;
  padding-bottom: 2rem;
`;

const FormStyled = styled.form`
  ${FLEX_COLUMN}
  align-items: unset;
  gap: 1.5rem;
  width: 90%;
  max-width: 60rem;
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
  text-transform: capitalize;
`;

const GroupInput = styled.input`
  ${inputStyles}
`;

const GroupTextArea = styled.textarea`
  ${inputStyles}
  height: 15rem;
  resize: none;
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

  ${mdScreen(`
    padding: 1.2rem 2rem;    
    margin: 0 auto;
  `)}
`;

const ErrorText = styled.p<{ visible: boolean }>`
  color: ${COLORS.red};
  font-size: 1.2rem;
  opacity: 0;
  ${transition}

  ${({ visible }) => visible && "opacity: 1;"}
`;

const SuccessText = styled(SubTitle)`
  color: ${COLORS.green};
  padding: 0 3rem;
  max-width: 50rem;
  line-height: 1.5;
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
  ErrorText,
  ScrollableDiv,
  SuccessText,
};
