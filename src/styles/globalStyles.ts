import { createGlobalStyle } from "styled-components";
import { COLORS } from "./colors";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        text-decoration: none;
        border: none;
        outline: none;
        font-family: sans-serif;
    }

    html {
        font-size: 62.5%;
    }

    html,
    body {
        max-width: 100vw;
    }

    body {
        font-size: 1.6rem;
        background: ${COLORS.bgColor};
        color: ${COLORS.white};
    }

    a {
        color: inherit;
    }

    img {
        max-width: 100%;
        object-fit: cover;
    }
`;
