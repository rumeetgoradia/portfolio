import { useState } from "react"
import { IoIosMoon } from "react-icons/io"
import { IoSunnySharp } from "react-icons/io5"
import { ThemeString } from "../../../constants"
import { useThemeToggleStyles } from "./ThemeToggle.styles"

interface ThemeToggleProps {
	theme: ThemeString
	toggleTheme: () => void
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
	const [checked, setChecked] = useState<boolean>(theme === "dark")

	const classes = useThemeToggleStyles({ checked })

	return (
		<div className={classes.root}>
			<label htmlFor="theme-toggle" className={classes.label}>
				<input
					id="theme-toggle"
					name="theme-toggle"
					type="checkbox"
					checked={checked}
					onChange={() => {
						toggleTheme()
						setChecked(!checked)
					}}
					className={classes.input}
				/>
				<span className={classes.slider}>
					<span className={classes.switch}>
						{checked ? <IoIosMoon /> : <IoSunnySharp />}
					</span>
				</span>
			</label>
		</div>
	)
}

export default ThemeToggle
