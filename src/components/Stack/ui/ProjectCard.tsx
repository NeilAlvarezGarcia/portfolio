import React, { FC } from "react";

import { ProjectContent } from "@/utils/interfaces/projectType";

import CustomeImage from "@/components/CustomeImage";

import { ProjectCardContainer, ProjectCardContent, ProjectCardLink } from "../styles";
import { SubTitle } from "@/components/styledComponents";
import Github from "@/icons/Github";
import { COLORS } from "@/styles/colors";

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

        <ProjectCardLink href={content.link} target='_blank' style={{}}>
          Repository
          <Github color={COLORS.black} />
        </ProjectCardLink>
      </ProjectCardContent>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
