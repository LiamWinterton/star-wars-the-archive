import Link from "next/link"
import Image from "next/image"

export default function PersonSingle(props) {
	const { person } = props

	const regex = /\/people\/(\d+)\//
	const result = regex.exec(person.url)

	const id = parseInt(result[1])

	return (
		<Link href={`/person/${id}`}>
			<a>
				<Image src={`/assets/characters/${id}.jpg`} width={200} height={300} alt={person.name} />
				<p>{person.name}</p>
			</a>
		</Link>
	)
}