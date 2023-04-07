import { P, SubTitle2 } from "@/components/styledComponents";
import React, { FC } from "react";
import { CardBtn, CardContianer } from "../styles";

interface Props {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Card: FC<Props> = ({ icon, title, description }) => {
  return (
    <CardContianer>
      {icon}
      <SubTitle2>{title}</SubTitle2>
      <P>{description}</P>
      <CardBtn
      //  onClick={() => setModalOpen(true)}
      >
        Read more
      </CardBtn>
    </CardContianer>
  );
};

export default Card;
