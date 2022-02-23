import Button from '../Button/Button'

import styles from './Pagination.module.sass'

export default function Pagination(props) {
	const { previous, next } = props

	return(
		<div className={styles.pagination}>
			{previous &&
				<Button href={`${props.path}/${previous}`} text="Previous" />
			}
			{next !== false &&
				<Button href={`${props.path}/${next}`} text="Next" />
			}
		</div>
	)
}