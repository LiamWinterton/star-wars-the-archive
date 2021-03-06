import MenuItem from "./MenuItem"

export default function Menu(props) {
	const { links } = props

	return (
		<nav>
			<ul className="space-y-2">
				{links.map((link, i) => {
					return <MenuItem key={i} href={link.href} text={link.text} />
				})}
			</ul>
		</nav>
	)
}