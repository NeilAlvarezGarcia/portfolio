import React, { FC } from "react";

import { Group, GroupLabel, GroupInput } from "../styles";

interface Props {
  label: string;
  type?: string;
}

const Input: FC<Props> = ({ label, type = "text" }) => {
  return (
    <Group>
      <GroupLabel htmlFor={label}>{label}</GroupLabel>
      <GroupInput type={type} id={label} />
    </Group>
  );
};

export default Input;
