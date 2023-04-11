import { css } from "styled-components";

export const setMediaQueryWidth = (width: string, styles: string) => css`
  @media (min-width: ${width}) {
    ${styles}
  }
`;
export const setMediaQueryHeight = (height: string, styles: string) => css`
  @media (min-height: ${height}) {
    ${styles}
  }
`;
export const smScreen = (styles: string) => setMediaQueryWidth("640px", styles);
export const mdScreen = (styles: string) => setMediaQueryWidth("768px", styles);
export const lgScreen = (styles: string) => setMediaQueryWidth("1024px", styles);
export const xlScreen = (styles: string) => setMediaQueryWidth("1280px", styles);

export const mediumHeightPhones = (styles: string) => setMediaQueryHeight("700px", styles);
