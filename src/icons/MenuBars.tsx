import React, { FC } from "react";

import { IconProps } from "@/utils/interfaces/IconProps";

import { COLORS } from "@/styles/colors";

const MenuBars: FC<IconProps> = ({ size = 26, color = COLORS.white }) => {
  return (
    <svg width={size} height={size} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
      <path
        d='M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z'
        fill={color}></path>
    </svg>
  );
};

export default MenuBars;
