import React, { FC } from "react";

import ArrowUp from "@/icons/ArrowUp";
import Phone from "@/icons/Phone";

import { P, Section } from "../styledComponents";

import { CallBtn, FooterBtn, FooterContainer } from "./styles";

const Footer: FC<{ changeSection: () => void }> = ({ changeSection }) => {
  return (
    <Section>
      <FooterContainer>
        <P>Copyright © {new Date().getFullYear()} by me | All Rights Reserved</P>

        <CallBtn href='tel:+573024151956'>
          <Phone />
          Call me
        </CallBtn>

        <FooterBtn onClick={changeSection}>
          <ArrowUp />
        </FooterBtn>
      </FooterContainer>
    </Section>
  );
};

export default Footer;
