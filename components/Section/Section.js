import styles from './Section.module.sass'

export default function Section(props) {
	return (
		<section className={styles.section}>
			<div className="container">
				<h2 className={styles.title}>{props.title}</h2>
				<div className={styles.content}>
					{props.children}
				</div>
			</div>
		</section>
	)
}