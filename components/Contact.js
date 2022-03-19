/* eslint-disable @next/next/no-img-element */
import React from "react";
import FACEBOOK from "../icons/FACEBOOK";
import GITHUB from "../icons/GITHUB";
import LINKEDIN from "../icons/LINKEDIN";

const Header = () => {
  return (
    <section className="row" id="contact">
      <div className="col-md-12">
        <div className="card card-body bg-secondary rounded">
          <div className="row">
            <div className="col-md-4 d-flex align-items-center">
              <img src="/reach.svg" alt="Reach" className="img-fluid" />
            </div>
            <div className="col-md-8 text-light py-4">
              <h2>You can reach me on:</h2>
              <p className=" fw-bold">
                Email:{" "}
                <span className="fw-light fs-5">Neil8b.jjr2014@gmail.com</span>
              </p>
              <p className="mb-0 fw-bold">
                Cellphone - whatsApp:{" "}
                <span className="fw-light fs-5">+57 - 3024151956</span>
              </p>
              <div className="redes d-flex justify-content-between my-3 col-12 col-md-9 col-lg-6 col-sm-8">
                <a
                  href="https://www.linkedin.com/in/neil-alvarez-garcia/"
                  className="linkedin"
                >
                  <LINKEDIN />
                </a>
                <a
                  href="https://github.com/NeilAlvarezGarcia"
                  className="github"
                >
                  <GITHUB />
                </a>
                <a
                  href="https://www.facebook.com/neil.alvarez.520/"
                  className="facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FACEBOOK />
                </a>
              </div>
              <a
                href="/NEILCV.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary rounded"
              >
                Take a look my CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
