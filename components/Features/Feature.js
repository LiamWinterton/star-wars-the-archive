import styles from './Feature.module.sass'

import Image from "next/image"

export default function Feature(props) {
	return (
		<div className={styles.feature}>
			<div className={styles.image}>
				<Image src="https://via.placeholder.com/400x400" width={400} height={400} alt={props.alt} />
			</div>
			<h2 className={styles.title}>{props.title}</h2>
			{props.children}
		</div>
	)
}