import React from "react";

import ArrowUp from "@/icons/ArrowUp";

import { P, Section } from "../styledComponents";

import { FooterBtn, FooterContainer } from "./styles";

const Footer = () => {
  return (
    <Section>
      <FooterContainer>
        <P>Copyright © {new Date().getFullYear()} by me | All Rights Reserved</P>

        <FooterBtn
        // onClick={() => scrollInto(homeRef.current!)}
        >
          <ArrowUp />
        </FooterBtn>
      </FooterContainer>
    </Section>
  );
};

export default Footer;
