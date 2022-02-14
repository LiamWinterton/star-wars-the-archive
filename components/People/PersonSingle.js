import Link from "next/link"

import styles from './PersonSingle.module.sass'

export default function PersonSingle(props) {
	const { person } = props

	const regex = /\/people\/(\d+)\//
	const result = regex.exec(person.url)

	const id = parseInt(result[1])

	return (
		<Link href={`/person/${id}`}>
			<a className={styles.link}>{person.name}</a>
		</Link>
	)
}