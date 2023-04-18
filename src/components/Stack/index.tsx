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
            description='I have extensive experience working with technologies such as HTML5, CSS3, Javascript, Typescript, Reacts, and Git, which allows me to create dynamic and engaging user experiences, ensuring that the frontend development work is efficient, effective, and modern.'
            handleClick={() => {
              openModal();
              setProjects(frontendProjects);
            }}
          />

          <Card
            icon={<Server />}
            title='Back - End'
            description="I have extensive experience working with technologies such as Node.js, GraphQL, MongoDB, and MySQL, which allows me to create robust and efficient server-side applications, API's and databases, ensuring that the backend development work is efficient, effective, and fast load."
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
