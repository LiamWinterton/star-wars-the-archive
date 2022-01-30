import React from "react"
import styles from "./Relative.module.sass"

export default function Relative(props) {
	const child = (
		<>
			<div className={styles.content}>
				{props.content}
			</div>
			<div className={styles["background-image"]}>
				{props.backgroundImage}
			</div>
		</>
	)

	return (
		<>
			{React.cloneElement(props.wrapper, { className: styles.wrapper + ' ' + props.wrapper.props.className }, child)}
		</>
	)
}