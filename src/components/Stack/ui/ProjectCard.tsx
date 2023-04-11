import React, { FC } from "react";

import { ProjectContent } from "@/utils/interfaces/projectType";

import CustomeImage from "@/components/CustomeImage";
import LinkTo from "@/icons/LinkTo";

import { ProjectCardContainer, ProjectCardContent, ProjectCardLink } from "../styles";
import { P, SubTitle } from "@/components/styledComponents";

interface Props {
  content: ProjectContent;
  image: string;
}

const ProjectCard: FC<Props> = ({ content, image }) => {
  return (
    <ProjectCardContainer>
      <CustomeImage img={image} />

      <ProjectCardContent>
        <SubTitle>{content.title}</SubTitle>
        <P>{content.description}</P>

        <ProjectCardLink href={content.link} target='_blank' style={{}}>
          <LinkTo />
        </ProjectCardLink>
      </ProjectCardContent>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
