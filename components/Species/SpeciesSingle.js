import Link from "next/link"

import styles from './SpeciesSingle.module.sass'

export default function SpeciesSingle(props) {
	const { species } = props

	const regex = /\/species\/(\d+)\//
	const result = regex.exec(species.url)

	const id = parseInt(result[1])

	return (
		<Link href={`/race/${id}`}>
			<a className={styles.link}>{species.name}</a>
		</Link>
	)
}