import React, { FC } from "react";

import { Group, GroupLabel, GroupInput, ErrorText } from "../styles";

interface Props {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

const Input: FC<Props> = ({ label, type = "text", placeholder, value, handleChange, error }) => {
  return (
    <Group>
      <GroupLabel htmlFor={label}>{label}</GroupLabel>
      <GroupInput
        type={type}
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <ErrorText visible={!!error}>{error}</ErrorText>
    </Group>
  );
};

export default Input;
