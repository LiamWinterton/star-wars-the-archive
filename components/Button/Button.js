import Link from "next/link"

export default function Button(props) {
	const { href, text } = props

	return (
		<Link href={href}>
			<a className="button">{text}</a>
		</Link>
	)
}