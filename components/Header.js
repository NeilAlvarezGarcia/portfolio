/* eslint-disable @next/next/no-img-element */
import React from "react";
import CSS from "../icons/CSS";
import GIT from "../icons/GIT";
import HTML from "../icons/HTML";
import JS from "../icons/JS";
import REACT from "../icons/REACT";
import SASS from "../icons/SASS";

const Header = () => {
  return (
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary rounded">
          <div className="row">
            <div className="col-md-4 portrait">
              <img src="/portrait.jpg" alt="Portrait Neil" />
            </div>
            <div className="col-md-8 text-light py-4">
              <h1>Neil Alvarez Garcia</h1>
              <h3>Software FrontEnd Developer</h3>
              <p className="mb-0">
                I´m a Fronted developer that works with tecnologies as HTML, CSS
                and Javascript - Typescript / React.js - Next.js.
              </p>
              <p className="mt-0">
                With two years of experience, I´ve been creating and maintaining
                projects as simple e-commerces, web games, web sites for friends
                and relative and a lot of projects to improve and practice my
                abilities as developer.
              </p>
              <div className="tecnologies d-flex justify-content-between my-3 col-11 col-md-9 col-lg-6">
                <a href="#skills" className="html">
                  <HTML />
                </a>
                <a href="#skills" className="css">
                  <CSS />
                </a>
                <a href="#skills" className="sass">
                  <SASS />
                </a>
                <a href="#skills" className="jvs">
                  <JS />
                </a>
                <a href="#skills" className="react">
                  <REACT />
                </a>
                <a href="#skills" className="git">
                  <GIT />
                </a>
              </div>
              <a href="#contact" className="btn btn-outline-primary rounded">
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
