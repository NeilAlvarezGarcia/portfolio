import { keyframes } from "styled-components";

const appearing = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const upToDownMove = keyframes`
  0% {
    transform: translateY(-20%);
  }

  100% {
    transform: translateY(0%);
  }
`;

const downToUpMove = (pocentage = "5%") => keyframes`
  0% {
    transform: translateY(${pocentage});
  }

  50% {
    transform: translateY(-${pocentage});
  }

  100% {
    transform: translateY(${pocentage});
  }
`;

export { appearing, upToDownMove, downToUpMove };
