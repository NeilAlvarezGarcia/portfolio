import React, { FC } from "react";

import { IconProps } from "@/utils/interfaces/IconProps";
import { COLORS } from "@/styles/colors";

const Server: FC<IconProps> = ({ size = 50, color = COLORS.mainColor }) => {
  return (
    <svg width={size} height={size} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
      <path
        d='M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 110 48 24 24 0 110-48zm48 24a24 24 0 1148 0 24 24 0 11-48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 110 48 24 24 0 110-48zm56 24a24 24 0 1148 0 24 24 0 11-48 0z'
        fill={color}></path>
    </svg>
  );
};

export default Server;
