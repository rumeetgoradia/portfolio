import { Typography } from "@material-ui/core"
import { useListsStyles } from "./Lists.styles"

interface List {
	title: string
	items: string[]
}

interface ListsProps {
	lists: List[] | List
	keyId: string
}

const Lists: React.FC<ListsProps> = ({ lists, keyId }) => {
	const _lists = ([] as List[]).concat(lists)

	const classes = useListsStyles()

	return (
		<div className={classes.root}>
			{_lists.map((list, index) => (
				<div key={`${keyId}-list-${index}`} className={classes.container}>
					<Typography className={classes.title}>{list.title}</Typography>
					<Typography className={classes.items}>
						{list.items.join(" · ")}
					</Typography>
				</div>
			))}
		</div>
	)
}

export default Lists
