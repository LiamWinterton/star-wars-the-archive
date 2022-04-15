import Link from "next/link"

export default function PlanetSingle(props) {
	const { planet } = props

	const regex = /\/planets\/(\d+)\//
	const result = regex.exec(planet.url)

	const id = parseInt(result[1])

	return (
		<Link href={`/planet/${id}`}>
			<a>{planet.name}</a>
		</Link>
	)
}