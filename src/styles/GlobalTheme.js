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
		--green: rgb(52, 146, 110);
	}

	body, #body {
		background-color: ${({ theme }) => theme.body};
		color: ${({ theme }) => theme.font};
		margin: 0;
		padding: 0;
		font-family: "Calibre";
		font-weight: 300;
		line-height: 1;
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
		background-color: ${({ theme }) => theme.bodyRGBA + ".85)"};
		border-bottom: 1px solid ${({ theme }) => theme.font};
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
		#nav-links-container.show {
			@media screen and (max-width: 768px) {
				background-color: ${({ theme }) => theme.bodyRGBA + ".95)"};
				border-bottom-color: ${({ theme }) => theme.font};
			}
		}
		@media screen and (max-width: 768px) {
			&.open {
				background-color: ${({ theme }) => theme.bodyRGBA + ".95)"};
			}			
		}
	}
	
	#navbar-brand {
		color: ${({ theme }) => theme.font};
		text-shadow: ${({ theme }) => theme.navLinkShadow};
	}

	#navbar-toggler {  
  		#toggler-icon {
 		    &:before,
      		&:after {
        		background-color: ${({ theme }) => theme.font};
				box-shadow: ${({ theme }) => theme.navLinkShadow};
    		}      
  		}
  		&.collapsed {
    		#toggler-icon {
				box-shadow: ${({ theme }) => theme.navLinkShadow};
      			background-color: ${({ theme }) => theme.font};
    		}
  		}
	}

	.fluid-container {
		padding-top: 80px;
		padding-bottom: 80px;
	}

	.profile-img {
		border-color: ${({ theme }) => theme.imgBorder} !important;
	}

	.skill-display {
		&:hover {
			.skill-info-container {
				text-shadow:  ${({ theme }) => "1px 1px 3px " + theme.fontRGBA + ".35)"}
			}
		}
	}

	.interest-display {
		.interest-icon {
			fill: ${({ theme }) => theme.fontRGBA + ".2)"}
		}
		.interest-title {
			color: ${({ theme }) => theme.font};
		}
		.interest-overlay {
			background-color: ${({ theme }) => theme.bodyRGBA + ".45)"}
		}
		&:hover {
			.interest-title {
				text-shadow:  ${({ theme }) => "1px 1px 3px " + theme.fontRGBA + ".35)"};
			}
		}
	}
	.timeline {
		&:before {
			/* background-color: ${({ theme }) => theme.font}; */
		}
		.timeline-element {			
			.timeline-element-content {
				h1, h2 {
					color: ${({ theme }) => theme.font};
				}
				h3, p {
					color: ${({ theme }) => theme.fontRGBA + ".85)"};
				}
				.experience-svg {
					fill: ${({ theme }) => theme.font};
				}
			}
			.timeline-element-icon {
				background-color: ${({ theme }) => theme.font};
				border-color: ${({ theme }) => theme.font};
				svg {
					fill: ${({ theme }) => theme.font};
				}
			}
			.timeline-element-date {
				border: none;
			}
		}
	}

	.project-card {
		box-shadow: ${({ theme }) => theme.containerShadow};
		.project-content-container {
			background-color: ${({ theme }) => theme.cardColor};	
			h1, h2 {
					color: ${({ theme }) => theme.font};
			}
			p {
				color: ${({ theme }) => theme.fontRGBA + ".85)"};
			}
		}
	}
	

	#footer {
		background-color: ${({ theme }) => theme.bodyRGBA + ".85)"};
		border-top: 1px solid ${({ theme }) => theme.font};
		.contact-link {
			background-color: ${({ theme }) => theme.font};
			color: ${({ theme }) => theme.body};
			&:hover, &:focus {
				box-shadow: ${({ theme }) => theme.navLinkShadow};
			}
		}
	}
`
