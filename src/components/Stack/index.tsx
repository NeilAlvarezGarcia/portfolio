import React from "react";

import Code from "@/icons/Code";
import Server from "@/icons/Server";

import { Section, SubTitle } from "../styledComponents";

import { StackCards, StackContainer } from "./styles";
import Card from "./ui/Card";

const Stack = () => {
  return (
    <Section
    // ref={stackTechRef}
    >
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
          />

          <Card
            icon={<Server />}
            title='Back - End'
            description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet quam nostrum
                voluptates hic esse minus impedit quis dolores optio laudantium harum corrupti nisi
                iste, repudiandae voluptatibus illo, suscipit delectus possimus.'
          />
        </StackCards>
      </StackContainer>
    </Section>
  );
};

export default Stack;
