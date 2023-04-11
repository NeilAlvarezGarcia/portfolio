import Send from "@/icons/Send";
import React from "react";

import { SubTitle } from "../../styledComponents";

import {
  FormContainer,
  FormStyled,
  Group,
  GroupLabel,
  GroupTextArea,
  SubmitButton,
} from "../styles";
import Input from "./Input";

const Form = () => {
  return (
    <FormContainer>
      <SubTitle>
        Let's write <span>the letter</span>
      </SubTitle>

      <FormStyled
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          marginTop: "2rem",
        }}>
        <Input label='Name' />

        <Input label='Email' type='email' />

        <Group>
          <GroupLabel htmlFor='description'>Description</GroupLabel>
          <GroupTextArea
            id='description'
            style={{
              borderRadius: "1rem",
              padding: "1rem",
              background: "transparent",
              border: "white solid thin",
              color: "white",
              height: "20rem",
              fontSize: "1.6rem",
            }}></GroupTextArea>
        </Group>
        <SubmitButton>
          Send <Send />
        </SubmitButton>
      </FormStyled>
    </FormContainer>
  );
};

export default Form;
