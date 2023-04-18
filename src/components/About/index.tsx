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
          <div>
            <P>
              I'm a highly skilled Full-Stack Developer with several years of experience in the
              software development industry. I have extensive knowledge of frontend and backend
              technologies.
            </P>
            <P>
              I have recently worked with great teams in companies such as WebRun, GreenRun,
              Univision, and Controles Empresariales, where I had the opportunity to learn from
              partners with extensive experience in the software industry. They taught me a lot of
              things, and I am grateful for the opportunity to work with such knowledgeable
              individuals.
            </P>
            <P>
              I'm the kind of guy who always strives to improve his skills and stay up-to-date with
              the latest technologies and industry trends.
            </P>
            <P>
              I also enjoy cycling through scenic routes, practicing low-impact endurance training
              by swimming, and building strength and endurance through regular workout routines.
            </P>
          </div>

          <AboutBtn onClick={changeSection}>Read more</AboutBtn>
        </AboutContent>
      </AboutContainer>
    </Section>
  );
});

export default About;
