import { renderSvg } from "@/utils"
import { useEffect, useState } from "react"
export const useDynamicSvgGeneration = (
	path: string,
	className: string,
	classes: Record<string, string>
): JSX.Element | undefined => {
	const [svg, setSvg] = useState<JSX.Element>()

	useEffect(() => {
		let mounted = true
		if (mounted) {
			console.log("rendering", path)
			renderSvg(path, className).then((value) => setSvg(value))
		}
		return () => {
			mounted = false
		}
	}, [renderSvg, classes])

	return svg
}
