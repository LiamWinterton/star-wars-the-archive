import styles from './Grid.module.sass'

export default function Grid(props) {
	const inlineStyle = {
		gridTemplateColumns: ` repeat(${props.columns}, minmax(0, 1fr)`
	}
	
	return (
		<div className={styles.grid} style={inlineStyle}>
			{props.children}
		</div>
	)
}