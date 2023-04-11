import React, { FC } from "react";

import ArrowUp from "@/icons/ArrowUp";

import { P, Section } from "../styledComponents";

import { FooterBtn, FooterContainer } from "./styles";

const Footer: FC<{ changeSection: () => void }> = ({ changeSection }) => {
  return (
    <Section>
      <FooterContainer>
        <P>Copyright © {new Date().getFullYear()} by me | All Rights Reserved</P>

        <FooterBtn onClick={changeSection}>
          <ArrowUp />
        </FooterBtn>
      </FooterContainer>
    </Section>
  );
};

export default Footer;
