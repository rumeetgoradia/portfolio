import { memo } from "react"
import { createGlobalStyle } from "styled-components"

export const GlobalStyles = memo(createGlobalStyle`

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

	.fluid-container {
 		padding-top: 80px;
 		padding-bottom: 80px;
	}
`)

// Transfer the following to individual components

// #navbar {
// 	background-color: ${({ theme }) => theme.bodyRGBA + ".85)"};
// 	border-bottom: 1px solid ${({ theme }) => theme.font};
// 	.navbar-link {
// 		&::after, &::before {
// 			background-color: ${({ theme }) => theme.font};
// 			box-shadow: ${({ theme }) => theme.navLinkShadow};
// 		}
// 		&:hover, &:focus {
// 			&::after {
// 				height: 4px;
// 			}
// 		}
// 	}
// 	#nav-links-container.show {
// 		@media screen and (max-width: 768px) {
// 			background-color: ${({ theme }) => theme.bodyRGBA + ".95)"};
// 			border-bottom-color: ${({ theme }) => theme.font};
// 		}
// 	}
// 	@media screen and (max-width: 768px) {
// 		&.open {
// 			background-color: ${({ theme }) => theme.bodyRGBA + ".95)"};
// 		}
// 	}
// }

// #navbar-brand {
// 	color: ${({ theme }) => theme.font};
// 	text-shadow: ${({ theme }) => theme.navLinkShadow};
// }

// #navbar-toggler {
// 	  #toggler-icon {
// 		 &:before,
// 		  &:after {
// 			background-color: ${({ theme }) => theme.font};
// 			box-shadow: ${({ theme }) => theme.navLinkShadow};
// 		}
// 	  }
// 	  &.collapsed {
// 		#toggler-icon {
// 			box-shadow: ${({ theme }) => theme.navLinkShadow};
// 			  background-color: ${({ theme }) => theme.font};
// 		}
// 	  }
// }

// .fluid-container {
// 	padding-top: 80px;
// 	padding-bottom: 80px;
// }

// .profile-img {
// 	border-color: ${({ theme }) => theme.imgBorder} !important;
// }

// .skill-display {
// 	&:hover {
// 		.skill-info-container {
// 			text-shadow:  ${({ theme }) => "1px 1px 3px " + theme.fontRGBA + ".35)"}
// 		}
// 	}
// }

// .interest-display {
// 	.interest-icon {
// 		fill: ${({ theme }) => theme.fontRGBA + ".2)"}
// 	}
// 	.interest-title {
// 		color: ${({ theme }) => theme.font};
// 	}
// 	.interest-overlay {
// 		background-color: ${({ theme }) => theme.bodyRGBA + ".45)"}
// 	}
// 	&:hover {
// 		.interest-title {
// 			text-shadow:  ${({ theme }) => "1px 1px 3px " + theme.fontRGBA + ".35)"};
// 		}
// 	}
// }
// .timeline {
// 	&:before {
// 		/* background-color: ${({ theme }) => theme.font}; */
// 	}
// 	.timeline-element {
// 		.timeline-element-content {
// 			h1, h2 {
// 				color: ${({ theme }) => theme.font};
// 			}
// 			h3, p {
// 				color: ${({ theme }) => theme.fontRGBA + ".85)"};
// 			}
// 			.experience-svg {
// 				fill: ${({ theme }) => theme.font};
// 			}
// 		}
// 		.timeline-element-icon {
// 			background-color: ${({ theme }) => theme.font};
// 			border-color: ${({ theme }) => theme.font};
// 			svg {
// 				fill: ${({ theme }) => theme.font};
// 			}
// 		}
// 		.timeline-element-date {
// 			border: none;
// 		}
// 	}
// }

// .project-card {
// 	box-shadow: ${({ theme }) => theme.containerShadow};
// 	.project-content-container {
// 		background-color: ${({ theme }) => theme.cardColor};
// 		h1, h2 {
// 				color: ${({ theme }) => theme.font};
// 		}
// 		p {
// 			color: ${({ theme }) => theme.fontRGBA + ".85)"};
// 		}
// 	}
// }

// #footer {
// 	background-color: ${({ theme }) => theme.bodyRGBA + ".85)"};
// 	border-top: 1px solid ${({ theme }) => theme.font};
// 	.contact-link {
// 		background-color: ${({ theme }) => theme.font};
// 		color: ${({ theme }) => theme.body};
// 		&:hover, &:focus {
// 			box-shadow: ${({ theme }) => theme.navLinkShadow};
// 		}
// 	}
// }
