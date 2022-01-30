import MenuItem from "./MenuItem"

import styles from './Menu.module.sass'

export default function Menu(props) {
	const { links } = props

	return (
		<div className={styles.menu}>
			{links.map((link, i) => {
				return <MenuItem key={link.href} href={link.href} text={link.text} />
			})}
		</div>
	)
}