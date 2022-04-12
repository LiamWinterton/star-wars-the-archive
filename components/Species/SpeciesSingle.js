import Image from 'next/image'
import Link from "next/link"

import styles from './SpeciesSingle.module.sass'

export default function SpeciesSingle(props) {
	const { species } = props

	const regex = /\/species\/(\d+)\//
	const result = regex.exec(species.url)

	const id = parseInt(result[1])

	return (
		<Link href={`/race/${id}`}>
			<a className={styles.link}>
				<Image src={`/assets/species/${id}.jpg`} width={200} height={300} alt={species.name} layout="responsive" />
				<p>{species.name}</p>
			</a>
		</Link>
	)
}