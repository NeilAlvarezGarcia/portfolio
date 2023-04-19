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
          <CustomeImage img='https://scontent.fctg2-1.fna.fbcdn.net/v/t39.30808-6/300072186_3282368385422978_1647719255329765991_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHat-oyERSyUffmEuR8OPQgZPx3vCmrWG1k_He8KatYbRaka5MLIEZso_Msd_BAAzOpxlfZEPh4Mx2geQ7UUXHv&_nc_ohc=wLP_Qmhwxb8AX9SZD2y&_nc_ht=scontent.fctg2-1.fna&oh=00_AfD6GdU7jG9X2sI2dO8dAPNA0n8Uq_1Qy2b3D1keKak8rg&oe=64438FB1' />
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
