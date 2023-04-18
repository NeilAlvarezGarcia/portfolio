import React from "react";

import Github from "@/icons/Github";
import Linkedin from "@/icons/Linkedin";

import CustomeImage from "../CustomeImage";
import { P, Title } from "../styledComponents";

import {
  CVBtn,
  HomeContent,
  HomeImage,
  HomeSection,
  HomeSubtitle,
  SocialMediaBtn,
  SocialMediaContainer,
} from "./styles";

const Home = () => {
  return (
    <HomeSection>
      <HomeContent>
        <div>
          <HomeSubtitle>Hi, It's me</HomeSubtitle>
          <Title>Neil Alvarez Garcia</Title>
          <HomeSubtitle>
            And I'm a <span>Fullstack Developer</span>
          </HomeSubtitle>
        </div>
        <P>
          I’m currently working with technologies such as HTML5, CSS3, JavaScript, TypeScript,
          React.js, Next.js, Node.js, GraphQL, MongoDB, MySQL, Docker, and Git. Additionally, I am
          proficient in both English and Spanish.
        </P>

        <SocialMediaContainer>
          <SocialMediaBtn href='https://www.linkedin.com/in/neil-alvarez-garcia/' target='_blank'>
            <Linkedin />
          </SocialMediaBtn>
          <SocialMediaBtn href='https://github.com/NeilAlvarezGarcia' target='_blank'>
            <Github />
          </SocialMediaBtn>
        </SocialMediaContainer>

        <CVBtn href='/NEILCV.pdf' target='_blank'>
          My CV
        </CVBtn>
      </HomeContent>

      <HomeImage>
        <CustomeImage img='https://avatars.githubusercontent.com/u/77638000?v=4' />
      </HomeImage>
    </HomeSection>
  );
};

export default Home;
