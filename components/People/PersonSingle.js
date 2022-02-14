import Link from "next/link"

export default function PersonSingle(props) {
	const { person } = props

	return (
		<Link href="">
			<a>{person.name}</a>
		</Link>
	)
}