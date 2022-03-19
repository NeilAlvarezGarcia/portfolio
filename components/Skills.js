import React from "react";
import { knowlegde } from "../data/index";

const Skills = () => {
  return (
    <div>
      {knowlegde.map((item, i) => (
        <div className="my-2 increase" key={i}>
          {item.skill}
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              style={{ width: item.percent }}
            >
              <p>{item.percent}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
