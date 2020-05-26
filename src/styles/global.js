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
import { createGlobalStyle } from "styled-components"

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

	:root {
		--green: #34926e;
	}

	body, #body {
		/* background-color: ${({ theme }) => theme.body}; */
		color: ${({ theme }) => theme.font};
		min-height: 100vh;
		overflow: hidden;
		margin: 0;
		padding: 0;
		font-family: "Calibre";
		font-weight: 300;
		line-height: 1;
		transition: all .3s linear;
	}

	#gradient {
		display: block;
		position: fixed;
		z-index: 3;
		width: 100%;
		height: 100vh;
		background-color: ${({ theme }) => theme.body};
		background-image: ${({ theme }) => theme.gradient};
		opacity: 1;
	}

	#gradient-transition {
		display: block;
		position: fixed;
		z-index: 4;
		width: 100%;
		height: 100vh;
		background-color: ${({ theme }) => theme.font};
		background-image: ${({ theme }) => theme.oppositeGradient};
	}

	#navbar {
		opacity: .85;
		background-color: ${({ theme }) => theme.body};
		border-bottom: 1px solid ${({ theme }) => theme.font};
		transition: all .3s linear;
		.navbar-link {
			&::after, &::before {
				background-color: ${({ theme }) => theme.font};
				box-shadow: ${({ theme }) => theme.navLinkShadow};
			}
			&:hover, &:focus {
				&::after {
					height: 4px;	
				}
			}
		}	
	}
	
	#navbar-brand {
			text-shadow: ${({ theme }) => theme.textShadow}
		}

	.about-img {
		border-color: ${({ theme }) => theme.imgBorder} !important;
	}

	.interests-svg {
		fill: ${({ theme }) => theme.font}
	}

	h1, h2, h3, h4, h5, h6 {
		margin: 0;
	}
`
