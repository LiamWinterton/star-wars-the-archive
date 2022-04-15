import styles from './Section.module.sass'

export default function Section(props) {
	const contentClass = styles[props.content] || false

	const sectionStyles = [ styles.section ]

	if(props.type) {
		sectionStyles.push(styles[props.type])
	}
	
	if(props.size) {
		sectionStyles.push(styles[props.size])
	}

	return (
		<section className={sectionStyles.join(" ")}>
			<div className="container">
				<h2 className={styles.title}>{props.title}</h2>
				<div className={contentClass ? contentClass : undefined}>
					{props.children}
				</div>
			</div>
		</section>
	)
}