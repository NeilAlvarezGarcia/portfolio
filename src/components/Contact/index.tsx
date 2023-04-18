import React, { useState, forwardRef } from "react";

import { Ref } from "@/utils/interfaces/refType";

import Envelop from "@/icons/Envelop";
import Whatsapp from "@/icons/WhatsApp";

import { P, Section, SubTitle } from "../styledComponents";
import Modal from "../Modal";
import FormStyled from "./ui/Form";
import { COLORS } from "@/styles/colors";

import {
  ContactBtnContainer,
  ContactContainer,
  ContactContent,
  EmailBtn,
  WhatsBtn,
  BtnContainer,
} from "./styles";

const Contact = forwardRef<Ref>((_, ref) => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <Section bg={COLORS.secondBgColor} ref={ref}>
      <ContactContainer>
        <ContactContent>
          <SubTitle>
            Contact <span>Me</span>
          </SubTitle>
          <P>
            If you believe that my skills and experience make me a good fit for the developer
            position you're looking to fill, please don't hesitate to reach out to me. I'm always
            happy to discuss potential projects and explore new opportunities. Whether you're
            looking for a frontend, backend, or full-stack developer, I have the technical
            expertise, attention to detail, and communication skills necessary to help your project
            succeed.
          </P>
        </ContactContent>

        <ContactBtnContainer>
          <P>Send me a message via:</P>

          <BtnContainer>
            <WhatsBtn href='https://wa.me/573024151956' target='_blank'>
              <Whatsapp />
              Whatsapp
            </WhatsBtn>

            <EmailBtn onClick={() => setFormOpen(true)}>
              <Envelop color='#1f242d' />
              Email letter
            </EmailBtn>
          </BtnContainer>
        </ContactBtnContainer>
      </ContactContainer>

      <Modal active={formOpen} close={() => setFormOpen(false)}>
        <FormStyled active={formOpen} close={() => setFormOpen(false)} />
      </Modal>
    </Section>
  );
});

export default Contact;
