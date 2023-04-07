import React, { FC } from "react";

import ArrowUp from "@/icons/ArrowUp";

import { ModalSection } from "./styles";

const Modal: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <ModalSection
      active={false}
      // className={`${styles.modal} ${modalOpen && styles.active}`}
      // onClick={() => setModalOpen(false)}
    >
      <div onClick={(e) => e.stopPropagation()} style={{ position: "relative" }}>
        {children}
        <button
        // className={styles.btn} onClick={() => setModalOpen(false)}
        >
          <ArrowUp />
          Close
        </button>
      </div>
    </ModalSection>
  );
};

export default Modal;
