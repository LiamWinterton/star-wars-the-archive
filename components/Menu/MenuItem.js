import Link from "next/link"

export default function MenuItem(props) {
	const { text, href } = props

	return (
		<li>
			<Link href={href}>
				<a>{text}</a>
			</Link>
		</li>
	)
}