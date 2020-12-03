import { PortfolioTheme } from "./../themes/CommonTheme"

declare module "styled-components" {
	interface DefaultTheme extends PortfolioTheme {}
}
