import React, { FC, useEffect } from "react";

import ArrowUp from "@/icons/ArrowUp";

import { CloseBtn, ModalContainer, ModalSection } from "./styles";

interface Props {
  active: boolean;
  close: () => void;
  children: JSX.Element;
}

const Modal: FC<Props> = ({ active, close, children }) => {
  useEffect(() => {
    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [active]);

  return (
    <ModalSection active={active} onClick={close}>
      <ModalContainer onClick={(e) => e.stopPropagation()} style={{ position: "relative" }}>
        {children}

        <CloseBtn onClick={close}>
          <ArrowUp />
          Close
        </CloseBtn>
      </ModalContainer>
    </ModalSection>
  );
};

export default Modal;
