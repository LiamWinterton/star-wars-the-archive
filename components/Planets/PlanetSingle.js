import Link from "next/link"

import styles from './PlanetSingle.module.sass'

export default function PlanetSingle(props) {
	const { planet } = props

	const regex = /\/planets\/(\d+)\//
	const result = regex.exec(planet.url)

	const id = parseInt(result[1])

	return (
		<Link href={`/planet/${id}`}>
			<a className={styles.link}>{planet.name}</a>
		</Link>
	)
}