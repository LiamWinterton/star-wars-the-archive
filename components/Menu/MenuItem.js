import Link from "next/link"

export default function MenuItem(props) {
	const { text, href, className } = props

	return (
		<Link href={href}>
			<a className={className}>{text}</a>
		</Link>
	)
}