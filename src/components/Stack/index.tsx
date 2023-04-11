import React, { forwardRef, useState } from "react";

import { Ref } from "@/utils/interfaces/refType";
import { ProjectContent } from "@/utils/interfaces/projectType";

import Code from "@/icons/Code";
import Server from "@/icons/Server";

import { Section, SubTitle } from "../styledComponents";

import { StackCards, StackContainer } from "./styles";
import Card from "./ui/Card";
import Modal from "../Modal";
import LatestProjects from "./ui/LatestProjects";

import { frontendProjects } from "./data/projects/frontend";
import { backendProjects } from "./data/projects/backend";

const Stack = forwardRef<Ref>((_, ref) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [projects, setProjects] = useState<ProjectContent[] | null>(null);

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setProjects(null);
    setModalOpen(false);
  };

  return (
    <Section ref={ref}>
      <StackContainer>
        <SubTitle>
          Tech <span>Stack</span>
        </SubTitle>

        <StackCards>
          <Card
            icon={<Code />}
            title='Front - End'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quam nostrum
                voluptates hic esse minus impedit quis dolores optio laudantium harum corrupti nisi
                iste, repudiandae voluptatibus illo, suscipit delectus possimus.'
            handleClick={() => {
              openModal();
              setProjects(frontendProjects);
            }}
          />

          <Card
            icon={<Server />}
            title='Back - End'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quam nostrum
                voluptates hic esse minus impedit quis dolores optio laudantium harum corrupti nisi
                iste, repudiandae voluptatibus illo, suscipit delectus possimus.'
            handleClick={() => {
              openModal();
              setProjects(backendProjects);
            }}
          />
        </StackCards>
      </StackContainer>

      <Modal active={modalOpen} close={closeModal}>
        <LatestProjects projects={projects} />
      </Modal>
    </Section>
  );
});

export default Stack;
