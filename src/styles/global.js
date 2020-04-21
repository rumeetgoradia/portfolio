import { createGlobalStyle } from "styled-components"
import CalibreBlack from "../assets/fonts/CalibreBlack.otf"
import CalibreBlackItalic from "../assets/fonts/CalibreBlackItalic.otf"
import CalibreBold from "../assets/fonts/CalibreBold.otf"
import CalibreBoldItalic from "../assets/fonts/CalibreBoldItalic.otf"
import CalibreLight from "../assets/fonts/CalibreLight.otf"
import CalibreLightItalic from "../assets/fonts/CalibreLightItalic.otf"
import CalibreMedium from "../assets/fonts/CalibreMedium.otf"
import CalibreMediumItalic from "../assets/fonts/CalibreMediumItalic.otf"
import CalibreRegular from "../assets/fonts/CalibreRegular.otf"
import CalibreRegularItalic from "../assets/fonts/CalibreRegularItalic.otf"
import CalibreSemibold from "../assets/fonts/CalibreSemibold.otf"
import CalibreSemiboldItalic from "../assets/fonts/CalibreSemiboldItalic.otf"
import CalibreThin from "../assets/fonts/CalibreThin.otf"
import CalibreThinItalic from "../assets/fonts/CalibreThinItalic.otf"

export const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: "Calibre";
		src: url(${CalibreRegular}) format("opentype");
		font-weight: 400;
		font-style: normal;
	}
	@font-face {
		font-family: "Calibre";
		src: url(${CalibreRegularItalic}) format("opentype");
		font-weight: 400;
		font-style: italic;
	}
	@font-face {
		font-family: "Calibre";
		src: url(${CalibreThin}) format("opentype");
		font-weight: 100;
		font-style: normal;
	}
	@font-face {
		font-family: "Calibre";
		src: url(${CalibreThinItalic}) format("opentype");
		font-weight: 100;
		font-style: italic;
	}
	@font-face {
		font-family: "Calibre";
		src: url(${CalibreLight}) format("opentype");
		font-weight: 300;
		font-style: normal;
	}
	@font-face {
		font-family: "Calibre";
		src: url(${CalibreLightItalic}) format("opentype");
		font-weight: 300;
		font-style: italic;
	}
	@font-face {
		font-family: "Calibre";
		src: url(${CalibreMedium}) format("opentype");
		font-weight: 500;
		font-style: normal;
	}
	@font-face {
		font-family: "Calibre";
		src: url(${CalibreMediumItalic}) format("opentype");
		font-weight: 500;
		font-style: italic;
	}
	@font-face {
		font-family: "Calibre";
		src: url(${CalibreSemibold}) format("opentype");
		font-weight: 600;
		font-style: normal;
	}
	@font-face {
		font-family: "Calibre";
		src: url(${CalibreSemiboldItalic}) format("opentype");
		font-weight: 600;
		font-style: italic;
	}
	@font-face {
		font-family: "Calibre";
		src: url(${CalibreBold}) format("opentype");
		font-weight: 700;
		font-style: normal;
	}
	@font-face {
		font-family: "Calibre";
		src: url(${CalibreBoldItalic}) format("opentype");
		font-weight: 700;
		font-style: italic;
	}
	@font-face {
		font-family: "Calibre";
		src: url(${CalibreBlack}) format("opentype");
		font-weight: 900;
		font-style: normal;
	}
	@font-face {
		font-family: "Calibre";
		src: url(${CalibreBlackItalic}) format("opentype");
		font-weight: 900;
		font-style: italic;
	}

	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	body {
		background-color: ${({ theme }) => theme.body};
		background-image: ${({ theme }) => theme.gradient};
		color: ${({ theme }) => theme.font};
		min-height: 100vh;
		margin: 0;
		padding: 0;
		font-family: "Calibre";
		font-weight: 300;
		transition: all .25s linear;
	}

	h1 {
		margin: 0;
		font-weight: 700;
	}
`
