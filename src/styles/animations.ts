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

const HomeImageAnimation = keyframes`
  0% {
    transform: translateY(5%);
  }

  50% {
    transform: translateY(-5%);
  }

  100% {
    transform: translateY(5%);
  }
`;

export { appearing, upToDownMove, HomeImageAnimation };
