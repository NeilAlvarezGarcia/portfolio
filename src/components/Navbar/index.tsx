import React, { Dispatch, FC, SetStateAction, useState } from "react";

import { LogoContainer, LogoImage, MenuBtn, Nav, NavBtn, NavContainer, NavSection } from "./styles";

import { activeTypes } from "@/utils/interfaces/activeSectionTypes";

import MenuBars from "@/icons/MenuBars";

import CustomeImage from "../CustomeImage";

interface Props {
  section: activeTypes;
  changeSection: Dispatch<SetStateAction<activeTypes>>;
}

const Navbar: FC<Props> = ({ section, changeSection }) => {
  const [openNav, setOpenNav] = useState(false);

  const close = () => setOpenNav(false);

  const handleClick = (section: activeTypes) => {
    changeSection(section);
    close();
  };

  return (
    <NavSection active={openNav}>
      <NavContainer>
        <LogoContainer>
          <LogoImage>
            <CustomeImage img='/favicon.svg' />
          </LogoImage>
          Portfolio
        </LogoContainer>

        <MenuBtn onClick={() => setOpenNav((prevState) => !prevState)}>
          <MenuBars />
        </MenuBtn>

        <Nav>
          {Object.values(activeTypes).map((value, i) => (
            <NavBtn key={i} onClick={() => handleClick(value)} active={value === section}>
              {value}
            </NavBtn>
          ))}
        </Nav>
      </NavContainer>
    </NavSection>
  );
};

export default Navbar;
