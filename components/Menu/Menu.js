import MenuItem from "./MenuItem"

export default function Menu(props) {
	const { links, className } = props

	return (
		<nav>
			<ul className={className}>
				{links.map((link, i) => {
					return <MenuItem key={i} href={link.href} text={link.text} />
				})}
			</ul>
		</nav>
	)
}