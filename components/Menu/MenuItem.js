import Link from "next/link"

export default function MenuItem(props) {
	const { text, href } = props

	return (
		<Link href={href}>{text}</Link>
	)
}