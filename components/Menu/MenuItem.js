import Link from "next/link"

import styles from './MenuItem.module.sass'

export default function MenuItem(props) {
	const { text, href } = props

	return (
		<Link href={href}>
			<a className={styles.link}>{text}</a>
		</Link>
	)
}