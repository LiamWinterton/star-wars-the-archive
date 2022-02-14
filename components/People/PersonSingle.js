import Link from "next/link"

export default function PersonSingle(props) {
	const { person } = props

	const regex = /\/people\/(\d+)\//
	const result = regex.exec(person.url)

	const id = parseInt(result[1])

	return (
		<Link href={`/person/${id}`}>
			<a>{person.name}</a>
		</Link>
	)
}