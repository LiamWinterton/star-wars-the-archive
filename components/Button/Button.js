import Link from "next/link"

import styles from './Button.module.sass'

export default function Button(props) {
	const { href, text } = props

	return (
		<Link href={href}>
			<a className={styles.button}>{text}</a>
		</Link>
	)
}