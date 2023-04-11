import React, { forwardRef } from "react";

import { Ref } from "@/utils/interfaces/refType";

import { COLORS } from "@/styles/colors";

import CustomeImage from "../CustomeImage";
import { P, Section, SubTitle, SubTitle2 } from "../styledComponents";
import { AboutBtn, AboutContainer, AboutContent, AboutImg } from "./styles";

interface Props {
  changeSection: () => void;
}

const About = forwardRef<Ref, Props>(({ changeSection }, ref) => {
  return (
    <Section bg={COLORS.secondBgColor} ref={ref}>
      <AboutContainer>
        <AboutImg>
          <CustomeImage img='https://pps.whatsapp.net/v/t61.24694-24/315435945_132192446316455_3916711386734097490_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQJw1QpaYjJBEAmW_XFXnGQ5krPV-fVTIP8Hx7Zy9IZBg&oe=6438589D' />
        </AboutImg>

        <AboutContent>
          <SubTitle>
            About <span>Me</span>
          </SubTitle>
          <SubTitle2>FullStack Developer</SubTitle2>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad cum neque, numquam
            temporibus necessitatibus dolores, maxime debitis quasi quisquam odio saepe incidunt
            voluptate similique eum suscipit! Facilis, dolores perspiciatis. Soluta reiciendis in
            similique. Pariatur id minima, vitae rerum nam ipsa. Voluptatum doloremque rem harum
            omnis culpa unde aut laboriosam dolor incidunt impedit, quos quasi. Facilis nobis
            reprehenderit aut atque!
          </P>

          <AboutBtn onClick={changeSection}>Read more</AboutBtn>
        </AboutContent>
      </AboutContainer>
    </Section>
  );
});

export default About;
