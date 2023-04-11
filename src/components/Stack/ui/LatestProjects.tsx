import React, { FC } from "react";

import { ProjectContent } from "@/utils/interfaces/projectType";

import { SubTitle } from "@/components/styledComponents";
import { LatestProjectsContainer, LatestProjectsSection } from "../styles";
import ProjectCard from "./ProjectCard";
import { bgImages } from "../data/images";

interface Props {
  projects: ProjectContent[] | null;
}

const LatestProjects: FC<Props> = ({ projects }) => {
  return (
    <LatestProjectsSection>
      <SubTitle>
        Latest <span>Projets</span>
      </SubTitle>

      <LatestProjectsContainer>
        {projects?.map((project, i) => (
          <ProjectCard content={project} image={bgImages[i]} />
        ))}
      </LatestProjectsContainer>
    </LatestProjectsSection>
  );
};

export default LatestProjects;
