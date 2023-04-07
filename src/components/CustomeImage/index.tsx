import React, { FC } from "react";

import { Figure } from "./styles";

interface Props {
  img: string;
}

const CustomeImage: FC<Props> = ({ img }) => {
  return (
    <Figure>
      <img src={img} alt={img} />
    </Figure>
  );
};

export default CustomeImage;
