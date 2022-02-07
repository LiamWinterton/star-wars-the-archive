import MenuItem from "./MenuItem"

import styles from './Menu.module.sass'

export default function Menu(props) {
	const { links } = props

	const classes = []

	if(props.layout == "vertical") {
		classes.push([styles['menu-vertical']])
	}
	
	if(props.layout == "horizontal") {
		classes.push([styles['menu-horizontal']])
	}

	return (
		<div className={classes.join(" ")}>
			{links.map((link, i) => {
				return <MenuItem key={link.href} href={link.href} text={link.text} className={styles.link} />
			})}
		</div>
	)
}