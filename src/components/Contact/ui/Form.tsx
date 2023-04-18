import React, { FC, useEffect, useState } from "react";

import Send from "@/icons/Send";

import { SubTitle } from "../../styledComponents";
import { validate, validateErrors } from "../helpers/fieldValidators";

import {
  ErrorText,
  FormContainer,
  FormStyled,
  Group,
  GroupLabel,
  GroupTextArea,
  ScrollableDiv,
  SubmitButton,
  SuccessText,
} from "../styles";
import Input from "./Input";
import { labels } from "@/utils/interfaces/labelsFields";

const INITIAL_FORM_DATA = {
  [labels.name]: "",
  [labels.email]: "",
  [labels.description]: "",
};

const Form: FC<{ active: boolean; close: () => void }> = ({ active, close }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errorFields, setErrorFields] = useState(INITIAL_FORM_DATA);
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const addErrorFields = (id: string, error: string) =>
    setErrorFields((prevErrors) => ({ ...prevErrors, [id]: error }));

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, id } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    setSubmitError("");
    addErrorFields(id, "");

    if (!validate(value, id as labels)) addErrorFields(id, validateErrors[id as labels]);

    if (!value) addErrorFields(id, "Field cannot be empty");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formFilled = Object.values(formData).every((value) => value);
    const fieldsErrors = Object.values(errorFields).every((value) => !value);

    if (!formFilled) return setSubmitError("Fields cannot be empty");
    if (!fieldsErrors) return setSubmitError("Fix each field error before sending the letter");

    setLoading(true);

    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });
      const json = await res.json();

      if (!res.ok) throw new Error(json.message);

      setFormData(INITIAL_FORM_DATA);
      setSubmitSuccess(true);
    } catch (error: any) {
      setSubmitError(error.message as string);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!active) {
      setSubmitError("");
      setErrorFields(INITIAL_FORM_DATA);
      setSubmitSuccess(false);
      setFormData(INITIAL_FORM_DATA);
    }
  }, [active]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (submitSuccess) {
      timer = setTimeout(close, 3000);
    }

    return () => clearTimeout(timer as NodeJS.Timeout);
  }, [submitSuccess]);

  return (
    <FormContainer>
      {!submitSuccess ? (
        <>
          <SubTitle>
            Let's write <span>the letter</span>
          </SubTitle>

          <ScrollableDiv>
            <FormStyled onSubmit={handleSubmit}>
              <Input
                label={labels.name}
                placeholder='Your name'
                value={formData.name}
                handleChange={handleDataChange}
                error={errorFields.name}
              />

              <Input
                label={labels.email}
                type='email'
                placeholder='example@gmail.com'
                value={formData.email}
                handleChange={handleDataChange}
                error={errorFields.email}
              />

              <Group>
                <GroupLabel htmlFor={labels.description}>{labels.description}</GroupLabel>
                <GroupTextArea
                  id={labels.description}
                  placeholder='Anything you wanna tell me'
                  value={formData.description}
                  onChange={handleDataChange}
                />
                <ErrorText visible={!!errorFields.description}>{errorFields.description}</ErrorText>
              </Group>
              <SubmitButton>
                {loading ? "Sending" : "Send"} <Send />
              </SubmitButton>
            </FormStyled>
          </ScrollableDiv>

          <ErrorText visible={!!submitError}>{submitError}</ErrorText>
        </>
      ) : (
        <>
          <SuccessText>
            I received your email, and once I review it, I'll send you an email back. Thanks.
          </SuccessText>
        </>
      )}
    </FormContainer>
  );
};

export default Form;
