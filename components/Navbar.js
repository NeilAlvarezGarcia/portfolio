import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
      <div className="container d-flex justify-content-between">
        <p className="navbar-brand m-0 d-flex align-items-center">
          <Image src="/favicon.svg" alt="logo" width="30" height="30" />
          Portfolio
        </p>
        <div id="navbarNav">
          <ul className="d-flex mb-0">
            <a className="links me-4" href="#projects">
              Projects
            </a>
            <a href="#contact" className=" links">
              Contact
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
