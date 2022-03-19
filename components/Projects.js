/* eslint-disable @next/next/no-img-element */
import React from "react";
import { projects, themes } from "../data";
import CODE from "../icons/CODE";
import EYE from "../icons/EYE";

const Projects = () => {
  return (
    <>
      <div className="grid">
        {projects.map(
          ({ id, name, description, tecnologies, view_url, repo_url }) => (
            <div className="card rounded project" key={id}>
              <div className="card-header rounded bg-secondary text-white d-flex align-items-center justify-content-center py-4">
                <h5>{name}</h5>
              </div>
              <div className="card-body">
                <p className="card-text text-black des">{description}</p>
                <p className="d-flex flex-wrap w-100 justify-content-center tec">
                  {tecnologies.map((tec) => (
                    <span
                      key={id * Math.random() + 0.1}
                      className="text-capitalize me-3 text-muted"
                    >
                      {tec}
                    </span>
                  ))}
                </p>
                <div className="buttons-links d-flex flex-column flex-xl-row flex-lg-column flex-sm-row align-items-center justify-content-center">
                  <a
                    href={repo_url}
                    className="btn btn-primary rounded w-100"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CODE /> Code
                  </a>
                  <a
                    href={view_url}
                    className="btn btn-primary rounded w-100"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <EYE /> See demo
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Projects;
