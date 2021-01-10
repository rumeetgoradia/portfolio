export const renderSvg = async (
	path: string,
	className: string
): Promise<JSX.Element> => {
	const Svg: React.FC<React.SVGProps<SVGSVGElement>> = (
		await import("images/" + path + ".svg")
	).default
	return <Svg className={className} />
}
