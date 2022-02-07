import styles from './Section.module.sass'

export default function Section(props) {
	const contentClass = styles[props.content] || false

	return (
		<section className={styles.section}>
			<div className="container">
				<h2 className={styles.title}>{props.title}</h2>
				<div className={contentClass ? contentClass : undefined}>
					{props.children}
				</div>
			</div>
		</section>
	)
}