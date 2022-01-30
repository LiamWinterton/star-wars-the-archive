import Link from "next/link"

import MenuItem from "./MenuItem"

export default function Menu(props) {
	const { links } = props

	return (
		<div className="menu">
			{links.map((link, i) => {
				return <MenuItem key={link.href} href={link.href} text={link.text} />
			})}
		</div>
	)
}